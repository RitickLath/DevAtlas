import axios from "axios"

export const apiCLient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
})

apiCLient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)
