import prisma from "@/db";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await prisma.article.findFirstOrThrow({
    where: {
      id: Number(params.id),
    },
  });

  return (
    <>
      <div className="py-4">
        <h2 className="text-lg font-bold">{article.name}</h2>
        <i className="text-gray-400 text-sm">
          {article.posted_at.toDateString()}
        </i>
      </div>
      <div className="flex justify-start ">{article.content}</div>
    </>
  );
}
