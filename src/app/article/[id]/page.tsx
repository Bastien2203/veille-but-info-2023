import { useParams } from "next/navigation";
import db from "@/db";

async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await db.article.findUniqueOrThrow({
    where: { id: Number(params.id) },
  });

  return (
    <div>
      <h1 className="text-2xl">{article.name}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default ArticlePage;
