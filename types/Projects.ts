export interface Project {
    name: string,
    period: string,
    description: string,
    status: "Online" | "En progreso" | "Fuera de línea",
    links: {
        github: string,
        web: string
    },
    technologies: Array<string>,
    design_decisions: Array<
        {
            title: string,
            description: string
        }
    >
    ,
    images: Array<string>
}