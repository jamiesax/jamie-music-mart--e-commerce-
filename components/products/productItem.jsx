import products from '@/data/products.json';
import Image from 'next/image';
import classes from './productItem.module.css';
import Button from '../button.jsx';

const ProductItem = ({ addToCart }) => {
    return (
        <>
            {products.map((product) => (
            <li key={product.id} className={classes.productItem}>
                <div className={classes.imageWrapper}>
                    <Image src={product.image} alt={product.name} fill />
                </div>
                <div className={classes.productDetails}>
                    <h2>{product.name}</h2>
                    <p className={classes.description}>{product.description}</p>
                    <p className={classes.price}>${product.price}</p>
                    <Button onClick={() => {
                        addToCart(product);
                        console.log('Added to cart:', product);
                    }}>Add to Cart</Button>
                </div>
            </li>
            ))}
        </>
    );
};
export default ProductItem;
