import product from '@/data/products.json';
import Image from 'next/image';
import classes from './productItem.module.css';

const ProductItem = () => {
    return (
        <>
            {product.map((item) => (
            <li key={item.id} className={classes.productItem}>
                <div className={classes.imageWrapper}>
                    <Image src={item.image} alt={item.name} fill />
                </div>
                <div className={classes.productDetails}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p className={classes.price}>${item.price}</p>
                </div>
            </li>
            ))}
        </>
    );
};
export default ProductItem;
