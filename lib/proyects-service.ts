import projectsData from "@/data/projects.json"
import Project from "@/types/Project"

export default function projectsService(): Project[] {
    return projectsData as Project[];

}