import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import PageFilter from "@/components/ProjectsFilter";

export default async function Projects() {
  return (
    <>
      <section>
        <PageHeader
          pageTitle={"All Rewards"}
          lsroute={"/rewards"}
          lsiconPosition={"left"}
          lsimgSrc={"/assets/icons/search.svg"}
          lsplaceholder={"Search for rewards"}
          lsotherClasses={"flex-1"}
        />
        <div className="mt-10 flex w-full flex-col gap-6">Rewwards</div>
      </section>
    </>
  );
}
