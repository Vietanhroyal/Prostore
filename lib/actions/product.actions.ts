"use server";
// import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
// import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { Product } from "@/Types";
//get a latest product
export async function getLatesProduct(): Promise<Product[]> {
  try {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCT_LIMIT,
      orderBy: { createdAt: "desc" },
    });
    return data;
  } catch (err) {
    console.error("Lỗi khi getLatesProduct:", JSON.stringify(err, null, 2));
    throw err;
  }
}

//get single product buy it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
