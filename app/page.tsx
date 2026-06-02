import projectsService from "@/lib/proyects-service"
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {

  // Array de proyectos "projects"
  const projects = projectsService();
  // console.log(projects)


  return (
    <div className="w-full flex flex-col ">
      <Hero />
      <Projects projects={projects} />
    </div>
  );
}
