import { Modal } from "@/components/common/Modal";
import { PropsWithChildren, useEffect } from "react";
import { createNewArticle } from "@/services/createNewArticle";
import { redirect, useRouter } from "next/navigation";
// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";
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
  const [article, setArticle] = useFormState<Article>(initialState);

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
