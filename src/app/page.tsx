import { ArticleList } from "@/components/server-components/ArticleList";

export default async function Home() {
  return (
    <>
      <div className="flex justify-center">
        <ArticleList />
      </div>
    </>
  );
}
