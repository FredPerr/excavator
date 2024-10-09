"use client"

import { forwardRef } from "react"
import type { InputProps } from "./../primitives/input"
import { Input } from "./../primitives/input"
import { formatNorthAmerica } from "@fredperr/excavator/utils/formatters"

interface PhoneInputProps extends Omit<InputProps, "type"> {
  format?: (inputValue: string) => string
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, placeholder, format, ...props }, ref) => {
    return (
      <Input
        type="tel"
        placeholder={placeholder || "(___) ___-____"}
        className={className}
        onPaste={e => e.preventDefault()}
        onDrag={e => e.preventDefault()}
        onChange={e => {
          e.currentTarget.value = format
            ? format(e.currentTarget.value)
            : formatNorthAmerica(e.currentTarget.value)
        }}
        ref={ref}
        {...props}
      />
    )
  }
)

PhoneInput.displayName = "PhoneInput"
