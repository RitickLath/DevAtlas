import { LoginContainer } from "@/features/auth/login/components/login-container"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In - DevAtlas",
  description: "Sign in to your DevAtlas account",
}

export default function LoginPage() {
  return <LoginContainer />
}
