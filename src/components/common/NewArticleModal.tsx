import { Modal } from "@/components/common/Modal";
import { PropsWithChildren, useEffect, useState } from "react";
import { createNewArticle } from "@/services/createNewArticle";
import { redirect } from "next/navigation";
// @ts-expect-error
import { experimental_useFormState as useFormState } from "react-dom";

const initialState = {
  name: "",
  description: "",
  content: "",
};

export const NewArticleModal = (
  props: PropsWithChildren<{
    visible: boolean;
    setVisibility: (visibilty: boolean) => void;
  }>,
) => {
  const [state, formAction] = useFormState(createNewArticle, initialState);

  useEffect(() => {
    if (state?.articleId) {
      redirect(`/article/${state?.articleId}`);
    }
  }, [state]);

  return (
    <Modal
      visible={props.visible}
      setVisibility={props.setVisibility}
      title="Nouvel Article"
    >
      <form className="flex flex-col gap-4" action={formAction}>
        <input name="name" placeholder="Name" className="border-b-2" required />
        <textarea
          name="description"
          placeholder="Description"
          className="border-b-2"
          required
        />
        <textarea
          name="content"
          placeholder="Contenu"
          className="border-b-2"
          rows={6}
          required
        />
        <button
          className="bg-green-700 text-white p-4 rounded font-bold text-lg shadow hover:shadow-lg"
          type="submit"
        >
          Valider
        </button>
      </form>
    </Modal>
  );
};
