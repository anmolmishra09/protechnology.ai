import * as React from "react"

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (

    <div ref={ref} className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 border border-slate-50 ${className || ''}`} {...props} />
  )
)
Avatar.displayName = "Avatar"

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (

    <span ref={ref} className={`text-base font-black text-slate-950 uppercase tracking-tighter ${className || ''}`} {...props} />
  )
)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback }