"use server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
});

export async function createNewArticle(prevState: any, formData: FormData) {}
