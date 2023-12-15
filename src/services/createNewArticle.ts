"use server";
import { Article } from ".prisma/client";
import db from "@/db";

export async function createNewArticle(article: Article) {
  const { name, content, description } = article;
  return db.article.create({
    data: {
      name,
      content,
      description,
    },
  });
}
