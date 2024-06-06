import PageHeader from "@/components/PageHeader";
import PageFilter from "@/components/ProjectsFilter";

export default async function Projects() {
  return (
    <>
      <section>
        <PageHeader
          pageTitle={"All Community"}
          lsroute={"/community"}
          lsiconPosition={"left"}
          lsimgSrc={"/assets/icons/search.svg"}
          lsplaceholder={"Search for Community"}
          lsotherClasses={"flex-1"}
        />
      </section>
    </>
  );
}
