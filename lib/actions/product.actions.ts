"use server";
import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";
//get a latest product
export async function getLatesProduct() {
  const prisma = new PrismaClient();

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" }, // condition to get latest product
  });
  return convertToPlainObject(data); // convert prisma to js regular object
}
