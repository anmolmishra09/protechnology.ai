import * as React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}

      className={`w-full px-5 h-14 bg-slate-50 border border-slate-50 rounded-2xl text-slate-950 font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all shadow-sm ${className || ''}`}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }