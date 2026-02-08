"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

interface AuthGateProps {
    children: React.ReactNode;
    message?: string;
    buttonLabel?: string;
}

export default function AuthGate({
    children,
    message = "Trebuie să fii autentificat pentru a continua.",
    buttonLabel = "Conectează-te",
}: AuthGateProps) {
    return (
        <>
            <SignedIn>{children}</SignedIn>
            <SignedOut>
                <div className="text-center py-10 space-y-4">
                    <div className="text-4xl">🔒</div>
                    <p className="text-muted-foreground">{message}</p>
                    <SignInButton>
                        <button className="px-5 py-2.5 rounded-full text-sm font-medium bg-black text-white hover:bg-black/80 transition-colors">
                            {buttonLabel}
                        </button>
                    </SignInButton>
                </div>
            </SignedOut>
        </>
    );
}
