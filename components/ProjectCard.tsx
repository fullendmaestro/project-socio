import React from "react";
import NewProjectCard from "./NewProjectCard";

const projects = [
  {
    _id: 1,
    title: "Database integration",
    url: "assets/icons/avatar",
    category: "app",
  },
  {
    _id: 2,
    title: "API integration",
    url: "assets/icons/avatar",
    category: "app",
  },
  { _id: 3, title: "UI testing", url: "assets/icons/avatar", category: "app" },
  {
    _id: 4,
    title: "Project Socio",
    url: "assets/icons/avatar",
    category: "app",
  },
  {
    _id: 5,
    title: "Fixed glittering bug",
    url: "assets/icons/avatar",
    category: "app",
  },
];

const ProjectCard = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2 sm:px-8 sm:pb-8 sm:pt-6 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pb-8 xl:pt-6">
      {projects.map((project) => {
        return (
          <>
            <li x-for="project in projects" key={project._id}>
              <a
                href={"project.url"}
                className="group block rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500"
              >
                <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="font-semibold text-slate-900 group-hover:text-white">
                      {project.title}
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Category</dt>
                    <dd className="group-hover:text-blue-200">
                      {project.category}
                    </dd>
                  </div>
                  <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                    <dt className="sr-only">Users</dt>
                    <dd
                      x-for="user in project.users"
                      className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start"
                    >
                      <img
                        src={"/assets/icons/avatar"}
                        alt={"user.name"}
                        className="size-6 rounded-full bg-slate-100 ring-2 ring-white"
                        loading="lazy"
                      />
                    </dd>
                  </div>
                </dl>
              </a>
            </li>
          </>
        );
      })}
      <NewProjectCard />
    </ul>
  );
};

export default ProjectCard;
