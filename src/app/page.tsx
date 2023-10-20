import { ArticleList } from "@/components/common/ArticleList";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center">
        <Suspense fallback={<Loading />}>
          <ArticleList />
        </Suspense>
      </div>
    </>
  );
}
