import React from "react"
import { TerminalSquare } from "lucide-react"
import { LoginForm } from "./login-form"

export const LoginContainer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50/50 p-4 font-sans">
      <div className="w-full max-w-[440px] rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm sm:p-12">
        <div className="mb-10 flex flex-col items-center">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[#2E65F3] text-white shadow-sm">
              <TerminalSquare className="h-8 w-8" />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                DevAtlas
              </span>
              <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-500">
                v2.4
              </span>
            </div>
          </div>

          {/* Headings */}
          <div className="mt-8 text-center">
            <h1
              className="mb-3 text-3xl font-bold tracking-tight text-zinc-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Welcome back
            </h1>
            <p className="text-[16px] text-zinc-600">
              Continue your engineering learning journey.
            </p>
          </div>
        </div>

        <LoginForm />
      </div>
    </div>
  )
}
