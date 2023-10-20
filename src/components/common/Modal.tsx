import { PropsWithChildren } from "react";

export const Modal = (
  props: PropsWithChildren<{
    visible: boolean;
    setVisibility: (visibilty: boolean) => void;
    title?: string;
  }>,
) => {
  if (!props.visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-1/2 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{props.title}</h2>
        {props.children}
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={() => props.setVisibility(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
