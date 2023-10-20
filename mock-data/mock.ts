import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const articles: { name: string; content: string }[] = [
  {
    name: "Article 1",
    content:
      "This is the content of Article 1. It contains some text and information.",
  },
  {
    name: "Article 2",
    content:
      "Here is the content for Article 2. It discusses various topics and ideas.",
  },
  {
    name: "Article 3",
    content: "Article 3's content goes here. It may include images and links.",
  },
  {
    name: "Article 4",
    content:
      "Article 4's content is about a different subject. It's quite detailed.",
  },
  {
    name: "Article 5",
    content: "In Article 5, we explore a new perspective on a familiar topic.",
  },
  {
    name: "Article 6",
    content:
      "This is the content of Article 6. It discusses the latest trends and developments.",
  },
  {
    name: "Article 7",
    content:
      "Article 7 provides valuable insights into a specific area of interest.",
  },
  {
    name: "Article 8",
    content:
      "Article 8 is an in-depth analysis of a complex topic. It's a must-read!",
  },
  {
    name: "Article 9",
    content:
      "In Article 9, we delve into a controversial issue with different viewpoints.",
  },
  {
    name: "Article 10",
    content:
      "The 10th article explores emerging technologies and their impact on society.",
  },
];

prisma.article.deleteMany({}).then(() => {
  articles.forEach((article) => {
    prisma.article
      .create({
        data: article,
      })
      .then((res) => console.log(res));
  });
});
