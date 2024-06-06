import React from "react";

const NewProjectCard = () => {
  return (
    <div>
      {" "}
      <li className="flex">
        <a
          href="/new"
          className="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
        >
          <svg
            className="mb-1 text-slate-400 group-hover:text-blue-500"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
          </svg>
          New project
        </a>
      </li>
    </div>
  );
};

export default NewProjectCard;
