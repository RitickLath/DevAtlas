import React from "react"
import { TerminalSquare } from "lucide-react"
import Link from "next/link"
import { SignupForm } from "./signup-form"

export const SignupContainer = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4 font-sans">
      <div className="w-full max-w-[460px] rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex flex-col items-center">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-sm">
              <TerminalSquare className="h-6 w-6" />
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                DevAtlas
              </span>
              <span className="rounded-md bg-zinc-100 px-1.5 py-0.5 text-xs font-medium text-zinc-600">
                v2.4
              </span>
            </div>
          </div>

          {/* Headings */}
          <div className="mt-6 text-center">
            <h1
              className="mb-2 text-2xl font-bold tracking-tight text-zinc-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Create an account
            </h1>
            <p className="text-[15px] text-zinc-600">
              Start your engineering learning journey.
            </p>
          </div>
        </div>

        <SignupForm />

        <div className="mt-8 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 transition-colors hover:text-blue-500 hover:underline"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  )
}
