import ProductItem from "./productItem.jsx";
import classes from './productGrid.module.css';

const ProductGrid = () => {
  return (
    <>
     <main>
       <ul className={classes.productGrid}>
         <ProductItem />
       </ul>
     </main>
    </>
  );
};

export default ProductGrid;