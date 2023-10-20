"use server";

import prisma from "@/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const schema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  content: z.string().min(1),
});

export async function createNewArticle(prevState: any, formData: FormData) {
  const data = schema.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    content: formData.get("content"),
  });

  try {
    const article = await prisma.article.create({
      data: data,
    });
    revalidatePath("/");
    return { message: "Created", articleId: article.id, error: false };
  } catch (e) {
    return { message: e, error: true };
  }
}
