import { Modal } from "@/components/common/Modal";
import { PropsWithChildren, useEffect, useState } from "react";
import { createNewArticle } from "@/services/createNewArticle";
import { Article } from ".prisma/client";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export const NewArticleModal = (
  props: PropsWithChildren<{
    visible: boolean;
    setVisibility: (visibilty: boolean) => void;
  }>,
) => {
  const [newArticle, setNewArticle] = useState<Article>({
    name: "",
    description: "",
    content: "",
    posted_at: new Date(),
    id: 0,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setNewArticle({ ...newArticle, [e.target.name]: e.target.value });
  }
  const router = useRouter();

  function handleSubmit() {
    createNewArticle(newArticle)
      .then((r) => {
        if (r) {
          props.setVisibility(false);
          router.push("/article/" + r.id);
        }
      })
      .catch((e) => alert("Erreur enregistrement article" + e));
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
          onClick={handleSubmit}
        >
          Valider
        </button>
      </div>
    </Modal>
  );
};
