import projectsService from "@/lib/proyects-service"
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Page() {

  const projects = projectsService();
  // console.log(projects)


  return (
    <div className="w-full flex flex-col ">
      <Hero />
      <Projects />
    </div>
  );
}
