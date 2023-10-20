import { Article } from ".prisma/client";

export const ArticleCard = (props: { article: Article }) => {
  return (
    <div className="border p-3 rounded shadow flex flex-col">
      <h2 className="text-md font-bold">{props.article.name}</h2>
      <p>{props.article.content}</p>
      <i className="self-end text-gray-400 text-sm py-3">
        {props.article.posted_at.toDateString()}
      </i>
    </div>
  );
};
