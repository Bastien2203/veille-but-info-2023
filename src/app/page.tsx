import prisma from "@/db";
import { ArticleCard } from "@/components/common/ArticleCard";

export default async function Home() {
  const articles = await prisma.article.findMany({});

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl py-4">Tout les articles</h2>

          {articles.map((article) => (
            <ArticleCard article={article} key={article.id} />
          ))}
        </div>
      </div>
    </>
  );
}
