/**
 * Local rule-based comment moderation engine.
 * Scores comments and returns an action: approved, pending, or rejected.
 *
 * Checks:
 *  1. Profanity (RO + EN) with leetspeak normalization
 *  2. Spam patterns (ALL CAPS, repeated chars, excessive punctuation, URLs)
 *  3. Toxicity heuristics (hate speech, threats, slurs)
 *  4. Low-effort detection (very short messages)
 */

// ─── Romanian profanity / slurs ────────────────────────────────────────────
const PROFANITY_RO = [
    'pula', 'pizda', 'cur', 'cacat', 'muie', 'futui', 'futu', 'fute',
    'coaie', 'bulangiu', 'curva', 'tarfa', 'pizdă', 'pulă', 'căcat',
    'futere', 'labă', 'laba', 'sugipula', 'mortii', 'dracu', 'dracului',
    'mamata', 'mata', 'matii', 'morții', 'plm', 'pzdă', 'sugi',
    'bagamias', 'bagami-as', 'sloboz', 'prost', 'proasta', 'idiot',
    'handicapat', 'retardat', 'cretin', 'imbecil', 'dobitoc', 'bou',
    'fraier', 'fraiera', 'javre', 'javră', 'jigodie', 'lepra', 'lepră',
    'jeg', 'scârbă', 'scarba', 'gunoi', 'rahat',
]

// ─── English profanity / slurs ─────────────────────────────────────────────
const PROFANITY_EN = [
    'fuck', 'shit', 'ass', 'bitch', 'cunt', 'dick', 'cock', 'pussy',
    'bastard', 'whore', 'slut', 'damn', 'asshole', 'motherfucker',
    'nigger', 'nigga', 'faggot', 'retard', 'twat', 'wanker', 'bollocks',
    'crap', 'piss', 'douche', 'douchebag', 'jackass', 'bullshit',
    'shithead', 'dipshit', 'arsehole',
]

// ─── Hate speech / threat patterns (RO + EN) ──────────────────────────────
const THREAT_PATTERNS = [
    /\b(te\s+omor|te\s+ucid|te\s+termin|mori|crăpi|sa\s+mori|să\s+mori)\b/i,
    /\b(kill\s+you|die|kys|murder|shoot|stab)\b/i,
    /\b(te\s+fut|te-am\s+fut|te\s+rup|te\s+bag)\b/i,
    /\b(rape|kill\s+myself|suicide)\b/i,
]

// ─── Spam / URL patterns ──────────────────────────────────────────────────
const URL_REGEX = /https?:\/\/[^\s]+|www\.[^\s]+|\.[a-z]{2,4}\/[^\s]+/i
const REPEATED_CHAR_REGEX = /(.)\1{4,}/  // 5+ same character in a row
const EXCESSIVE_CAPS_THRESHOLD = 0.7     // 70%+ uppercase = suspicious
const EXCESSIVE_PUNCTUATION_REGEX = /[!?]{4,}/  // 4+ consecutive !/?

/**
 * Normalize leetspeak: replace common substitutions so profanity can't be dodged.
 */
function normalizeLeetspeak(text: string): string {
    return text
        .replace(/@/g, 'a')
        .replace(/4/g, 'a')
        .replace(/3/g, 'e')
        .replace(/1/g, 'i')
        .replace(/!/g, 'i')
        .replace(/0/g, 'o')
        .replace(/5/g, 's')
        .replace(/\$/g, 's')
        .replace(/7/g, 't')
        .replace(/\+/g, 't')
        .replace(/8/g, 'b')
        .replace(/9/g, 'g')
}

/**
 * Remove diacritics: ă→a, â→a, î→i, ș→s, ț→t  
 * So "pizd\u0103" still matches "pizda".
 */
function removeDiacritics(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

/**
 * Check if any word from the list appears in the (normalized) text.
 * Returns the matched words.
 */
function findProfanity(text: string, wordList: string[]): string[] {
    const normalized = removeDiacritics(normalizeLeetspeak(text.toLowerCase()))
    // Also strip spaces between characters to catch "f u c k", "p u l a"
    const condensed = normalized.replace(/\s+/g, '')

    const hits: string[] = []
    for (const word of wordList) {
        const normalizedWord = removeDiacritics(word.toLowerCase())
        // Check both the normal normalized text (word boundary) and the condensed form
        const wordRegex = new RegExp(`\\b${normalizedWord}\\b`, 'i')
        if (wordRegex.test(normalized) || condensed.includes(normalizedWord)) {
            hits.push(word)
        }
    }
    return hits
}

export type ModerationResult = {
    action: 'approved' | 'pending' | 'rejected'
    score: number
    reasons: string[]
}

/**
 * Moderate a comment text. Returns a score-based action.
 *
 * Score thresholds:
 *   0      → approved (clean)
 *   1-2    → pending  (borderline, needs human review)
 *   3+     → rejected (clearly toxic/spam)
 */
export function moderateComment(text: string): ModerationResult {
    let score = 0
    const reasons: string[] = []

    // 1. Low-effort check
    const wordCount = text.trim().split(/\s+/).length
    if (wordCount < 3 && text.trim().length < 10) {
        score += 1
        reasons.push('Mesaj prea scurt')
    }

    // 2. Profanity check — RO
    const roHits = findProfanity(text, PROFANITY_RO)
    if (roHits.length > 0) {
        score += Math.min(roHits.length * 2, 6)  // Each profanity adds 2 points
        reasons.push(`Limbaj nepotrivit (RO): ${roHits.join(', ')}`)
    }

    // 3. Profanity check — EN
    const enHits = findProfanity(text, PROFANITY_EN)
    if (enHits.length > 0) {
        score += Math.min(enHits.length * 2, 6)
        reasons.push(`Limbaj nepotrivit (EN): ${enHits.join(', ')}`)
    }

    // 4. Threat/hate speech patterns
    for (const pattern of THREAT_PATTERNS) {
        if (pattern.test(text)) {
            score += 3  // Threats are high severity
            reasons.push(`Amenințări/ură detectate`)
            break  // One hit is enough
        }
    }

    // 5. Spam: ALL CAPS abuse
    const letters = text.replace(/[^a-zA-ZăâîșțĂÂÎȘȚ]/g, '')
    if (letters.length > 8) {
        const upperRatio = letters.replace(/[^A-ZĂÂÎȘȚ]/g, '').length / letters.length
        if (upperRatio >= EXCESSIVE_CAPS_THRESHOLD) {
            score += 1
            reasons.push('Prea multe majuscule')
        }
    }

    // 6. Spam: repeated characters
    if (REPEATED_CHAR_REGEX.test(text)) {
        score += 1
        reasons.push('Caractere repetitive')
    }

    // 7. Spam: excessive punctuation
    if (EXCESSIVE_PUNCTUATION_REGEX.test(text)) {
        score += 1
        reasons.push('Punctuație excesivă')
    }

    // 8. Spam: URLs/links
    if (URL_REGEX.test(text)) {
        score += 2
        reasons.push('Link detectat')
    }

    // ─── Determine action ──────────────────────────────────────────────
    let action: ModerationResult['action']
    if (score === 0) {
        action = 'approved'
    } else if (score <= 2) {
        action = 'pending'
    } else {
        action = 'rejected'
    }

    return { action, score, reasons }
}
