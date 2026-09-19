import { useMutation } from "@tanstack/react-query"
import { loginService } from "../api/login.service"
import type { LoginRequest, LoginResponse } from "../types/login.type"

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data: LoginRequest) => loginService.login(data),
  })
}
