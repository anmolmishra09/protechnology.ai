import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2";
    
    const variantStyles = {
      default: "bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-900",
      ghost: "hover:bg-gray-100 text-gray-900"
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizes[size]} ${className || ''}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }