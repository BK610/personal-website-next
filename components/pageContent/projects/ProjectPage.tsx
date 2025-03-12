import BaseLayout from "@/components/BaseLayout";
import ProjectContent from "@/components/pageContent/projects/ProjectContent";
import type ProjectType from "@/types/ProjectType";

interface ProjectPageProps {
  project: ProjectType;
}

export default function Project({
  project,
}: ProjectPageProps): React.ReactElement {
  return (
    <BaseLayout titleText={`Projects | ${project.title}`}>
      <div className="max-w-3xl mx-auto">
        <ProjectContent project={project} />
      </div>
    </BaseLayout>
  );
}
