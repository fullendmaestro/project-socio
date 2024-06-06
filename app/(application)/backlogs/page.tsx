import LocalSearchbar from "@/components/LocalSearchbar";
import PageHeader from "@/components/PageHeader";
import PageFilter from "@/components/ProjectsFilter";

export default async function Projects() {
  return (
    <>
      <section>
        <PageHeader
          pageTitle={"All Backlog"}
          lsroute={"/backlogs"}
          lsiconPosition={"left"}
          lsimgSrc={"/assets/icons/search.svg"}
          lsplaceholder={"Search for Backlog"}
          lsotherClasses={"flex-1"}
        />
      </section>
    </>
  );
}
