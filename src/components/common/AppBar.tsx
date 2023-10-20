import { ArticleIcon } from "@/components/common/ArticleIcon";

export const AppBar = (props: { title: string }) => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto">
        <div className="flex items-center gap-2">
          <ArticleIcon />
          <h1 className="text-white text-lg font-medium">{props.title}</h1>
        </div>
      </div>
    </div>
  );
};
