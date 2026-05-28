import projectsService from "@/lib/proyects-service"
import { log } from "console";

export default function Page() {

  const projects = projectsService();
  console.log(projects)


  return (
    <div></div>
  );
}
