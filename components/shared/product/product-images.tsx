"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setcurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setcurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:bg-orange-600",
              current === index && "border-orange-500"
            )}
          >
            <Image src={image} alt="product image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
