import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className=" h-screen w-full flex-center">
      <SignUp />
    </main>
  );
}
