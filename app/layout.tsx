import { CartProvider } from '@/context/CartContext.jsx';
import NavBar from '@/components/homePageHero/navbar.jsx'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body style={{ margin: 0}}>
        <CartProvider>
          <NavBar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
