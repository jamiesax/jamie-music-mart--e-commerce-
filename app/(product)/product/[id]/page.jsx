import products from '@/data/products.json'
import ProductDetailUI from '../../../../components/productDetailspage/productDetailUI';

const ProductDetail = async({ params }) => {
  const { id } = await params;
  const item = products.find(p => p.id === id);

  // console.log(item)

  if (!item) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
    <ProductDetailUI item={item} />
    </>
  );
};

export default ProductDetail;