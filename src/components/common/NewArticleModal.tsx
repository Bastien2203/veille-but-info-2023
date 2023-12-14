import { Modal } from "@/components/common/Modal";
import { PropsWithChildren, useState } from "react";
import { useRouter } from "next/navigation";
import { Article } from ".prisma/client";

const initialState: Article = {
  name: "",
  description: "",
  content: "",
  posted_at: new Date(),
  id: 0,
};

export const NewArticleModal = (
  props: PropsWithChildren<{
    visible: boolean;
    setVisibility: (visibilty: boolean) => void;
  }>,
) => {
  const router = useRouter();
  const [article, setArticle] = useState<Article>(initialState);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setArticle({ ...article, [e.target.name]: e.target.value });
  }

  return (
    <Modal
      visible={props.visible}
      setVisibility={props.setVisibility}
      title="Nouvel Article"
    >
      <div className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Name"
          className="border-b-2"
          required
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          className="border-b-2"
          required
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Contenu"
          className="border-b-2"
          rows={6}
          required
          onChange={handleChange}
        />
        <button
          className="bg-green-700 text-white p-4 rounded font-bold text-lg shadow hover:shadow-lg"
          type="submit"
        >
          Valider
        </button>
      </div>
    </Modal>
  );
};
