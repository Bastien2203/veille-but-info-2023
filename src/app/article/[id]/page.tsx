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
      <h2 className="text-lg">{article.name}</h2>
      <div className="flex justify-center">{article.content}</div>
    </>
  );
}
