import PageFilter from "@/components/ProjectsFilter";
import ProjectCard from "@/components/ProjectCard";
import NewProjectCard from "@/components/NewProjectCard";
import Link from "next/link";
import LocalSearchbar from "@/components/LocalSearchbar";
import PageHeader from "@/components/PageHeader";

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
        <ProjectCard />
      </section>
    </>
  );
}
