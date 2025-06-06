"use client";

import ProjectSectionItem from "@/components/pageContent/projects/ProjectSectionItem";
import BaseLayout from "@/components/BaseLayout";
import SectionList from "@/components/SectionList";
import type ProjectType from "@/types/ProjectType";
import { Key } from "react";

interface ProjectsProps {
  projectsList: {
    data: Array<ProjectType>;
  };
}

export default function Projects({
  projectsList,
}: ProjectsProps): React.ReactElement {
  return (
    <BaseLayout titleText={"Projects"}>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative z-10">
        <div className="h-full w-full space-y-4">
          <h2>Projects</h2>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            I enjoy creating, teaching, and learning. Along the way, I've built
            a few things related to technology, music, food, gardening, and
            more. Here's a sample of those things.
          </div>
          <SectionList className="item-list grid grid-cols-1 sm:grid-cols-2">
            {projectsList.data
              .sort((a: ProjectType, b: ProjectType) => {
                // Sorting by date, newest --> oldest
                return Date.parse(b.date) - Date.parse(a.date);
              })
              .map((project: ProjectType, k: Key) => (
                <ProjectSectionItem project={project} key={k} />
              ))}
          </SectionList>
        </div>
      </div>
    </BaseLayout>
  );
}
