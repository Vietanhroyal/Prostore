import { z } from "zod";
import { insertingProductSchema } from "@/lib/validators";

//I dont know why this working becase I dont have enough knowledge about typescript and zod
export type Product = z.infer<typeof insertingProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
