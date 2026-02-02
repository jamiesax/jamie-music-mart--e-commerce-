'use client'
import Link from "next/link";
import { useCart } from '@/context/CartContext';
import Image from "next/image";
import Logo from '@/public/image/jamieLogo/jamieSaxLogo.jpeg'
import classes from './navbar.module.css'
import { useState } from "react";


const NavBar = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const { cart } = useCart();
  let highlightCart = false

  if(cart.length > 0) {
    highlightCart = true
  }


  return (
    <div className={classes.navContainer}>
      <nav className={classes.nav}>
        <div
          className={classes.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        

        <div className={`${classes.text} ${isOpen ? classes.open : ""}`}>
          <Link href={'/'}><Image src={Logo} alt="Logo" width={90} height={60}/></Link>

          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/product" onClick={() => setIsOpen(false)}>Products</Link>
        </div>

        <Link href={'/product/cart'} className={classes.cart}>Go to Cart{!highlightCart ? '' : <span className={highlightCart ? classes.active : ''}>{cart.length}</span>}</Link>

    </nav>
    </div>
  );
};

export default NavBar;