/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import Layout from "../components/Layout"
import { ShoppingCart, X } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog"
import { Button } from "../components/ui/button"

type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (product: Product) => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="bg-white text-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <img className="w-full h-48 object-cover" src={product.image || "/placeholder.svg"} alt={product.name} />
        <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-primary font-medium">Rs.{product.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-white border border-gray-200">
          <DialogHeader>
          <DialogTitle className="text-gray-900">{product.name}</DialogTitle>
          <DialogDescription className="text-gray-500">{product.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img
              className="w-full h-64 object-cover rounded-md"
              src={product.image || "/placeholder.svg"}
              alt={product.name}
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">Rs.{product.price.toFixed(2)}</span>
            <Button
              onClick={() => {
                onAddToCart(product)
                setIsOpen(false)
              }}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function CartSidebar() {
  const { cart, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-4 bottom-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <ShoppingCart className="h-6 w-6" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
              onClick={() => setIsOpen(false)}
            ></div>
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="bg-card rounded-md text-muted-foreground hover:text-card-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-border">
                          {cart.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24 border border-border rounded-md overflow-hidden">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">Rs.{(item.price * item.quantity).toFixed(2)}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                <p className="text-black">Qty {item.quantity}</p>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() => removeFromCart(item.id)}
                                      className="font-medium text-primary hover:text-primary/80 bg-black text-white py-1 px-2 rounded-2xl hover:bg-zinc-800"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border py-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>Rs.{totalPrice.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-600">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Button className="w-full bg-black text-white hover:bg-zinc-800">Checkout</Button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-black">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="text-black font-medium hover:text-primary/80"
                          onClick={() => setIsOpen(false)}
                        >
                          Continue Shopping<span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

export default function Merchandise() {
  const { addToCart } = useCart()

  const products: Product[] = [
    {
      id: "1",
      name: "T-Shirt",
      description:
        "Boost your immune system with our high-quality Vitamin C supplements. Each tablet contains 1000mg of Vitamin C, perfect for daily use.",
      price: 19.99,
      image: "/Shirt1.png?height=200&width=300",
    },
    {
      id: "2",
      name: "T-Shirt",
      description:
        "Premium non-slip yoga mat, perfect for home workouts or studio sessions. Made from eco-friendly materials for a comfortable and sustainable practice.",
      price: 29.99,
      image: "/Shirt2.png?height=200&width=300",
    },
    {
      id: "3",
      name: "Desk Calendar",
      description:
        "Accurate and easy-to-use home device for monitoring your blood pressure. Features a large display and memory function to track your readings over time.",
      price: 49.99,
      image: "/jan.png?height=200&width=300",
    },
    {
      id: "4",
      name: "Desk Calendar",
      description:
        "Plant-based protein supplement made from organic ingredients. Perfect for post-workout recovery or as a nutritious meal replacement.",
      price: 39.99,
      image: "/feb.png?height=200&width=300",
    },
    {
      id: "5",
      name: "Journal",
      description:
        "Plant-based protein supplement made from organic ingredients. Perfect for post-workout recovery or as a nutritious meal replacement.",
      price: 39.99,
      image: "/Journal1.png?height=200&width=300",
    },
    {
      id: "6",
      name: "Journal",
      description:
        "Plant-based protein supplement made from organic ingredients. Perfect for post-workout recovery or as a nutritious meal replacement.",
      price: 39.99,
      image: "/Journal2.png?height=200&width=300",
    },
    {
      id: "7",
      name: "Poster",
      description:
        "Plant-based protein supplement made from organic ingredients. Perfect for post-workout recovery or as a nutritious meal replacement.",
      price: 39.99,
      image: "/Poster1.png?height=200&width=300",
    },
    {
      id: "8",
      name: "Poster",
      description:
        "Plant-based protein supplement made from organic ingredients. Perfect for post-workout recovery or as a nutritious meal replacement.",
      price: 39.99,
      image: "/Poster2.png?height=200&width=300",
    },
    
  ]

  return (
    <Layout>
     <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Merchandise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <CartSidebar />
    </Layout>
  )
}

