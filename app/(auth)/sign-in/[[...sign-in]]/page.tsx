import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function SignInPage() {
  return (
    <main className="flex h-screen justify-center items-center">
      <SignIn />
    </main>
  );
}
