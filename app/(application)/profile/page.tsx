import PageHeader from "@/components/PageHeader";
import PageFilter from "@/components/ProjectsFilter";

export default async function Projects() {
  return (
    <>
      <section>
        <PageHeader
          pageTitle={"All Profiles"}
          lsroute={"/profiles"}
          lsiconPosition={"left"}
          lsimgSrc={"/assets/icons/search.svg"}
          lsplaceholder={"Search for profiles"}
          lsotherClasses={"flex-1"}
        />
      </section>
    </>
  );
}
