export type PaletteColor = "red" | "gold" | "green" | "blue" | "purple" | "gray" | "orange"

export default interface Project {
    name: string,
    subtitle: string;
    period: string,
    color: PaletteColor,
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