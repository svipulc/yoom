import { SignUp } from "@clerk/nextjs";
import React from "react";

export default function SignUpPage() {
  return (
    <main className="flex h-screen justify-center items-center">
      <SignUp />
    </main>
  );
}
