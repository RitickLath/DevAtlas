import { apiCLient } from "@/lib/api/api-client"
import type { LoginRequest, LoginResponse } from "../types/login.type"

export const loginService = {
  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await apiCLient.post("/auth/login", data)
    return response.data
  },
}
