import React from "react"
import ProductCard from "../components/ProductCard"
import { gridCols } from "../utils/gridCols"

type ProductsProps = {
  columns: keyof typeof gridCols
}

export default function Products({ columns }: ProductsProps) {
  const products = Array.from({ length: 9 }, (_, i) => {
    return {
      title: `Product ${i + 1}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus, quidem obcaecati delectus quis praesentium quod sequi iure esse veritatis. Accusamus, similique. Cumque iure animi, eligendi accusamus explicabo laudantium ratione?",
      price: "24.99",
    }
  })

  return (
    <div className="container py-4">
      <div className={`grid ${gridCols[columns]} gap-4`}>
        {products.map((product, idx) => (
          <ProductCard
            key={idx}
            productInfo={product}
            className="space-y-2 p-4 rounded-md border-2 border-gray-400"
            onClick={() => console.log(product)}
          >
            <ProductCard.Title className="text-center text-lg">{product.title}</ProductCard.Title>
            <ProductCard.Description className="text-gray-400">{product.description}</ProductCard.Description>
            <ProductCard.Price className="text-gray-600 text-center">${product.price}</ProductCard.Price>
          </ProductCard>
        ))}
      </div>
    </div>
  )
}
