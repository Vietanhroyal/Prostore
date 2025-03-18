import ProductList from "@/components/shared/product/product-list";
import { getLatesProduct } from "@/lib/actions/product.actions";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(2000);
  const LatesProduct = await getLatesProduct();
  return (
    <>
      <ProductList data={LatesProduct} title="Newest Arrivails" />
    </>
  );
};

export default Homepage;
