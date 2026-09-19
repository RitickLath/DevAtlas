import { SignupContainer } from "@/features/auth/register/components/signup-container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Account - DevAtlas",
  description: "Create your DevAtlas account",
}

export default function RegisterPage() {
  return <SignupContainer />
}
