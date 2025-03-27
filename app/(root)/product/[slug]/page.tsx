import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
const ProducDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5 ">
          <div className="col-span-2"></div>
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap6">
              <p>{product.brand} {product.category}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProducDetailsPage;
