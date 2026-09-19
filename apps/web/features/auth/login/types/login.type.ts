export type LoginRequest = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  success: boolean
  token?: string
  message: string
}
