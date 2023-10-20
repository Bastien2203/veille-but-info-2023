import prisma from "@/db";
import { ArticleCard } from "@/components/common/ArticleCard";

export default async function Home() {
  const articles = await prisma.article.findMany({});

  return (
    <>
      <h2 className="text-lg">Tout les articles</h2>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>
    </>
  );
}
