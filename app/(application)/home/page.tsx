import e from "@/dbschema/edgeql-js";
import PageFilter from "@/components/ProjectsFilter";
import { auth } from "@/edgedb";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import SProjectCard from "@/components/SProjectCard";
import NoResult from "@/components/NoResult";
import Pagination from "@/components/Pagination";
import LocalSearchbar from "@/components/LocalSearchbar";
import PageHeader from "@/components/PageHeader";

const result = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      picture: "/assets/images/john-doe.jpg",
    },
    upvotes: 1500000,
    views: 500552,
    answers: [],
    createdAt: new Date("2023-09-01T12:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to center a div?",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "html" },
    ],
    author: {
      _id: "2",
      name: "Jane Smith",
      picture: "/assets/images/jane-smith.jpg",
    },
    upvotes: 5,
    views: 50,
    answers: [],
    createdAt: new Date("2021-09-02T10:30:00.000Z"),
  },
];

export default async function Projects() {
  return (
    <>
      <section>
        <PageHeader
          pageTitle={"All Projects"}
          lsroute={"/home"}
          lsiconPosition={"left"}
          lsimgSrc={"/assets/icons/search.svg"}
          lsplaceholder={"Search for projects"}
          lsotherClasses={"flex-1"}
        />
        <div className="mt-10 flex w-full flex-col gap-6">
          {result.length > 0 ? (
            result.map((project) => (
              <SProjectCard
                key={project._id}
                _id={project._id}
                title={project.title}
                tags={project.tags}
                author={project.author}
                upvotes={project.upvotes}
                views={project.views}
                chats={project.answers}
                createdAt={project.createdAt}
              />
            ))
          ) : (
            <NoResult
              title="There’s no project to show"
              description="You too can make the impact! 🚀 Create a project and kickstart the success of your business. Start Innovating! 💡"
              link="/projects"
              linkTitle="Create a project here"
            />
          )}
        </div>
      </section>
    </>
  );
}
