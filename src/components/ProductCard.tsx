import React, { HTMLAttributes } from "react"

type ProductCardProps = {
  children: React.ReactNode
  productInfo: {}
  className?: string
} & HTMLAttributes<HTMLDivElement>

type ProductCardElementProps = {
  children: React.ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export default function ProductCard({ children, className, productInfo, ...props }: ProductCardProps) {
  return (
    <div
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}

ProductCard.Title = function ({ children, className, ...props }: ProductCardElementProps) {
  return (
    <h2
      className={className}
      {...props}
    >
      {children}
    </h2>
  )
}

ProductCard.Description = function ({ children, className, ...props }: ProductCardElementProps) {
  return (
    <p
      className={className}
      {...props}
    >
      {children}
    </p>
  )
}

ProductCard.Price = function ({ children, className, ...props }: ProductCardElementProps) {
  return (
    <p className={className}>
      <span {...props}>{children}</span>
    </p>
  )
}
