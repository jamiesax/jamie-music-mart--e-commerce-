import products from '@/data/products.json';
import Image from 'next/image';
import classes from './productItem.module.css';
import Button from '../button.jsx';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const ProductItem = () => {
    const { addToCart } = useCart();
    
    return (
        <>
            {products.map((product) => (
            <li key={product.id} className={classes.productItem}>
                <Link href={`/product/${product.id}`}>
                <div className={classes.imageWrapper}>
                    <Image src={product.image} alt={product.name} fill />
                </div>
                <div className={classes.productDetails}>
                    <h2>{product.name}</h2>
                    <p className={classes.description}>{product.description}</p>
                    <p className={classes.price}>${product.price}</p>
                    
                </div>
                </Link>
                    <Button onClick={() => { addToCart(product) }}>Add to Cart</Button>
            </li>
            ))}
        </>
    );
};
export default ProductItem;
