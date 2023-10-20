"use client";
import { useState } from "react";
import { NewArticleModal } from "@/components/common/NewArticleModal";

export const FloatingButton = () => {
  const [modalVisibilty, setModalVisibilty] = useState<boolean>(false);

  return (
    <>
      {modalVisibilty && (
        <NewArticleModal
          visible={modalVisibilty}
          setVisibility={setModalVisibilty}
        />
      )}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setModalVisibilty(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 0 0 0 2h7v7a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V4a1 1 0 0 0-1-1z" />
          </svg>
        </button>
      </div>
    </>
  );
};
