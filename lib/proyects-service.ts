import projectsData from "@/data/projects.json"
import { Project } from "@/types/Projects"

export default function projectsService(): Project[] {
    return projectsData as Project[];

}