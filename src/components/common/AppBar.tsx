import { ArticleIcon } from "@/components/common/ArticleIcon";

export const AppBar = (props: { title: string }) => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto">
        <a className="flex items-center gap-2" href="/">
          <ArticleIcon />
          <h1 className="text-white text-xl font-medium">{props.title}</h1>
        </a>
      </div>
    </div>
  );
};
