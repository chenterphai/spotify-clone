import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`w-full rounded-full bg-green-500 px-4 py-2 border border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-bold text-black hover:opacity-75 transition-all`, className)}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button'

export default Button