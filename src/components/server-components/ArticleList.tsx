import db from "@/db";
import { ArticleCard } from "@/components/common/ArticleCard";
import { Article } from ".prisma/client";

export const ArticleList = async () => {
  const articles = await db.article.findMany();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl py-4">Tout les articles</h2>

      {articles.map((article: Article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};
