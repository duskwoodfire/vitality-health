import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./contexts/CartContext";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "Vitality",
  icons:'./V.ico',
  description: "An App for our ESD Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
