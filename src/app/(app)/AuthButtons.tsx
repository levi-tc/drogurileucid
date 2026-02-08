"use client";

import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
// auth
export default function AuthButtons() {
    return (
        <span className="ml-2 border-l pl-4 border-black/10">
            <SignedOut>
                <SignInButton>
                    <button className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:bg-black/5">
                        Autentificare
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </span>
    );
}
