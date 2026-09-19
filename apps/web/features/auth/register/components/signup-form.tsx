"use client"

import React, { useState } from "react"
import { useForm } from "@tanstack/react-form"
import { SignupFormValues, signupSchema } from "../schema/signup.schema"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Button } from "@workspace/ui/components/button"
import { Mail, Key, User, Eye, EyeOff, ArrowRight } from "lucide-react"
import { useSignup } from "../hooks/use-signup"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { FieldError } from "@workspace/ui/components/field"

export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const signupMutation = useSignup()

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validators: {
      onChange: signupSchema,
    },
    onSubmit: async ({ value }: { value: SignupFormValues }) => {
      await signupMutation.mutateAsync(value)
    },
  })

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="flex w-full flex-col space-y-3"
    >
      <form.Field
        name="name"
        children={(field) => (
          <div className="space-y-1.5">
            <Label htmlFor={field.name} className="text-sm font-medium">
              Full Name
            </Label>
            <div className="relative">
              <User className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="John Doe"
                className="h-10 border-zinc-200 pl-10"
              />
            </div>
            {field.state.meta.isTouched && !field.state.meta.isValid ? (
              <FieldError errors={field.state.meta.errors} />
            ) : null}
          </div>
        )}
      />

      <form.Field
        name="email"
        children={(field) => (
          <div className="space-y-1.5">
            <Label htmlFor={field.name} className="text-sm font-medium">
              Work Email
            </Label>
            <div className="relative">
              <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id={field.name}
                name={field.name}
                type="email"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="engineer@company.internal"
                className="h-10 border-zinc-200 pl-10"
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
          <div className="space-y-1.5">
            <Label htmlFor={field.name} className="text-sm font-medium">
              Password
            </Label>
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
                className="h-10 border-zinc-200 pr-10 pl-10 tracking-widest placeholder:tracking-normal"
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
        name="confirmPassword"
        children={(field) => (
          <div className="space-y-1.5">
            <Label htmlFor={field.name} className="text-sm font-medium">
              Confirm Password
            </Label>
            <div className="relative">
              <Key className="absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground" />
              <Input
                id={field.name}
                name={field.name}
                type={showConfirmPassword ? "text" : "password"}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="••••••••••••"
                className="h-10 border-zinc-200 pr-10 pl-10 tracking-widest placeholder:tracking-normal"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showConfirmPassword ? (
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

      <div className="flex items-center space-x-2 pt-1 pb-1">
        <Checkbox
          id="terms"
          required
          className="h-5 w-5 rounded-sm border-zinc-300 data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white"
        />
        <Label
          htmlFor="terms"
          className="text-[15px] leading-none font-normal text-zinc-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I agree to the Terms of Service and Privacy Policy
        </Label>
      </div>

      {signupMutation.isError && (
        <p className="text-center text-[13px] text-destructive">
          {signupMutation.error.message || "An error occurred during signup."}
        </p>
      )}

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isSubmitting || signupMutation.isPending}
            className="mt-1 flex h-11 w-full items-center justify-center gap-2 bg-[#2E65F3] text-[15px] font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            {isSubmitting || signupMutation.isPending
              ? "Creating account..."
              : "Create Account"}
            {!(isSubmitting || signupMutation.isPending) && (
              <ArrowRight className="h-5 w-5" />
            )}
          </Button>
        )}
      />
    </form>
  )
}
