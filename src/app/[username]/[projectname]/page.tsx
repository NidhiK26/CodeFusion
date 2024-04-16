import { Section, Title } from "@/components/ui";
import { getProjects, getUsers } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa6";

export default async function page({
  params,
}: {
  params: { username: string; projectname: string };
}) {
  const projects = await getProjects();
  const project = projects.find(
    (project) => project.repo === `${params.username}/${params.projectname}`
  );

  if (!project) {
    notFound();
  }
  return (
    <Section>
      <div className="flex justify-between">
        <Title>{project?.title}</Title>
        <Link
          href={`https://github.com/${project.repo}`}
          target="_blank"
          className="text-3xl"
        >
          <FaGithub />
        </Link>
      </div>
      <p>{project?.description}</p>
      <div className="flex gap-4 text-sm">
        {project?.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </div>
      <div className="flex gap-4 uppercase text-xs font-bold">
        {project?.techStacks.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="flex gap-4 p-4">
        {project?.collaborators.map((collab) => (
          <Link
            href={`/${collab.username}`}
            key={collab.username}
            className="grid place-items-center"
          >
            <Image
              src={`https://github.com/${collab.username}.png`}
              alt={project.username}
              width={52}
              height={52}
              className="rounded-full border border-gray-800"
            />
            <figcaption className="text-xs">@{collab.username}</figcaption>
            <figcaption className="text-xs uppercase">{collab.role}</figcaption>
          </Link>
        ))}
      </div>
    </Section>
  );
}
