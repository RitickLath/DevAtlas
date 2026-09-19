import { apiCLient } from "@/lib/api/api-client"

import type {
  SignupRequest,
  SignupResponse,
} from "@/features/auth/register/types/signup.type"

export const signupService = {
  signup: async (data: SignupRequest): Promise<SignupResponse> => {
    const response = await apiCLient.post("/auth/register", data)
    return response.data
  },
}
