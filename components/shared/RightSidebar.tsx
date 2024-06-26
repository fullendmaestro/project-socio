import Image from "next/image";
import Link from "next/link";
import React from "react";

const favourites = [
  {
    _id: 1,
    title: "Database integration",
  },
  { _id: 2, title: "API integration" },
  { _id: 3, title: "UI testing" },
  { _id: 4, title: "Project Socio" },
  { _id: 5, title: "Fixed glittering bug" },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Favourites</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {favourites.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Analytics</h3>
        <div className="mt-7 flex flex-col gap-4"></div>
      </div>
    </section>
  );
};

export default RightSidebar;
