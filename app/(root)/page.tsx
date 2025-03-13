import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  // await delay(2000);

  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivails"
        limit={4}
      />
    </>
  );
};

export default Homepage;
