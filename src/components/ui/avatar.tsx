import * as React from "react"

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 ${className || ''}`} {...props} />
  )
)
Avatar.displayName = "Avatar"

const AvatarFallback = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span ref={ref} className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${className || ''}`} {...props} />
  )
)
AvatarFallback.displayName = "AvatarFallback"

export { Avatar, AvatarFallback }