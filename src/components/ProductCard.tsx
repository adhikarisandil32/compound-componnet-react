import React from "react"

type ProductCardProps = {
  children: React.ReactNode
  productInfo: {}
  className?: string
}

type EachElement = {
  children: React.ReactNode
  className?: string
}

export default function ProductCard({ children, className, ...props }: ProductCardProps) {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

ProductCard.Title = function ({ children, className, ...props }: EachElement) {
  return (
    <h2
      className={className}
      {...props}
    >
      {children}
    </h2>
  )
}

ProductCard.Description = function ({ children, className, ...props }: EachElement) {
  return (
    <p
      className={className}
      {...props}
    >
      {children}
    </p>
  )
}

ProductCard.Price = function ({ children, className, ...props }: EachElement) {
  return (
    <p className={className}>
      <span {...props}>{children}</span>
    </p>
  )
}
