"use client"

import React, { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { LoginFormValues, loginSchema } from "../schema/login.schema"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Button } from "@workspace/ui/components/button"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { FieldError } from "@workspace/ui/components/field"
import { Mail, Key, Eye, EyeOff, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLogin } from "../hooks/use-login"

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const loginMutation = useLogin()

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    } as LoginFormValues,
    validators: {
      onChange: loginSchema,
    },
    onSubmit: async ({ value }: { value: LoginFormValues }) => {
      await loginMutation.mutateAsync(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex w-full flex-col space-y-5"
    >
      <form.Field
        name="email"
        children={(field) => (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor={field.name}
                className="text-[15px] font-medium text-zinc-900"
              >
                Work Email
              </Label>
              <span className="text-[13px] text-zinc-500">SSO supported</span>
            </div>
            <div className="relative">
              <span className="absolute top-1/2 left-3 -translate-y-1/2 text-lg font-medium text-muted-foreground">
                @
              </span>
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="engineer@company.internal"
                className="h-11 border-zinc-200 pl-9 text-base shadow-sm"
              />
            </div>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
              <FieldError errors={field.state.meta.errors} />
            ) : null}
          </div>
        )}
      />

      <form.Field
        name="password"
        children={(field) => (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor={field.name}
                className="text-[15px] font-medium text-zinc-900"
              >
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-[13px] font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Key className="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
              <Input
                id={field.name}
                name={field.name}
                type={showPassword ? "text" : "password"}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="••••••••••••"
                className="h-11 border-zinc-200 pr-10 pl-10 text-base tracking-widest shadow-sm placeholder:tracking-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
              <FieldError errors={field.state.meta.errors} />
            ) : null}
          </div>
        )}
      />

      <form.Field
        name="rememberMe"
        children={(field) => (
          <div className="flex items-center space-x-3 pt-2">
            <Checkbox
              id={field.name}
              checked={field.state.value}
              onCheckedChange={(checked) =>
                field.handleChange(checked as boolean)
              }
              className="h-5 w-5 rounded-sm border-zinc-300 data-[state=checked]:border-zinc-900 data-[state=checked]:bg-white data-[state=checked]:text-zinc-900"
            />
            <Label
              htmlFor={field.name}
              className="text-[15px] leading-none font-normal text-zinc-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Keep workspace active for 30 days
            </Label>
          </div>
        )}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <div className="mt-3 flex w-full flex-col gap-2">
            {loginMutation.isError && (
              <p className="text-center text-[13px] text-destructive">
                {loginMutation.error.message ||
                  "An error occurred during login."}
              </p>
            )}
            <Button
              type="submit"
              disabled={!canSubmit || isSubmitting || loginMutation.isPending}
              className="flex h-12 w-full items-center justify-center gap-2 bg-[#2E65F3] text-[15px] font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              {isSubmitting || loginMutation.isPending
                ? "Signing In..."
                : "Sign In"}
              {!(isSubmitting || loginMutation.isPending) && (
                <ArrowRight className="h-5 w-5" />
              )}
            </Button>
          </div>
        )}
      />
    </form>
  )
}
