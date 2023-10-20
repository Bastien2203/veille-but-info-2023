import Article from "@/components/common/Article";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Article params={params} />
      </Suspense>
    </>
  );
}
