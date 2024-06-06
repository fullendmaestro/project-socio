import { redirect } from "next/navigation";
import AddProject from "@/components/forms/AddProject";
import e from "@/dbschema/edgeql-js";
import { auth } from "@/edgedb";
import React from "react";
import ProjectForm from "@/components/ProjectForm";
import { getUserById } from "@/lib/actions/user.action";

interface Props {
  title: string;
  description: string;
}

const addProject = async ({ title, description }: Props) => {
  "use server";
  const session = auth.getSession();

  const newProjectQuery = e.insert(e.Project, {
    title,
    description,
  });

  newProjectQuery.run(session.client);
};

const NewProject = () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Create a project</h1>

      <div className="mt-9">
        <AddProject addProject={addProject} />
      </div>
    </div>
  );
};

export default NewProject;
