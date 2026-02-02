import { CartProvider } from '@/context/CartContext.jsx';
import NavBar from '@/components/homePageHero/navbar.jsx'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
