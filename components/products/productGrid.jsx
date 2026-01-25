import ProductItem from "./productItem.jsx";
import classes from './productGrid.module.css';

const ProductGrid = () => {
  return (
    <>
      <ul className={classes.productGrid}>
        <ProductItem />
      </ul>
    </>
  );
};

export default ProductGrid;