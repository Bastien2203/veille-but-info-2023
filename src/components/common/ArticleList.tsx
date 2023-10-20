import { ArticleCard } from "@/components/common/ArticleCard";
import prisma from "@/db";

export const ArticleList = async () => {
  const articles = await prisma.article.findMany({});
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl py-4">Tout les articles</h2>

      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};
