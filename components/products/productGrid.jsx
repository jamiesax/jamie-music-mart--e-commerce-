import ProductItem from "./productItem.jsx";
import classes from './productGrid.module.css';

const ProductGrid = ({ addToCart }) => {
  return (
    <>
      <ul className={classes.productGrid}>
        <ProductItem addToCart={addToCart} />
      </ul>
    </>
  );
};

export default ProductGrid;