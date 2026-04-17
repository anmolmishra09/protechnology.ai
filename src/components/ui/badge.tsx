import * as React from "react"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {

      default: "bg-orange-50 text-orange-600 border border-orange-100",
      secondary: "bg-slate-50 text-slate-600 border border-slate-100",
      outline: "border border-slate-200 text-slate-950 bg-transparent"
    };

    return (
      <div
        ref={ref}

        className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-all ${variants[variant]} ${className || ''}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge }