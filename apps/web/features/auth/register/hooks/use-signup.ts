import { useMutation } from "@tanstack/react-query"
import { signupService } from "@/features/auth/register/api/signup.service"
import { SignupRequest, SignupResponse } from "../types/signup.type"

export const useSignup = () => {
  return useMutation<SignupResponse, Error, SignupRequest>({
    mutationFn: (data: SignupRequest) => signupService.signup(data),
  })
}
