import * as React from "react"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}

      className={`w-full px-5 py-4 bg-slate-50 border border-slate-50 rounded-2xl text-slate-950 font-medium placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-orange-500 transition-all shadow-sm resize-none ${className || ''}`}
      {...props}
    />
  )
)
Textarea.displayName = "Textarea"

export { Textarea }