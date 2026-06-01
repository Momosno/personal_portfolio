import Image from "next/image";
import Projects from "@/types/Projects"

export default function ProjectsInfo({ project }: { project: Projects }) {


    return (
        <>
            {/* Mobile */}
            <div className=" md:hidden absolute top-0 left-0 pt-4 pl-12 pr-5 pb-20 w-full h-full flex justify-center items-center">
                {/* Contenedor General */}
                <div className="h-full w-full flex flex-col items-center text-center justify-evenly">
                    {/* Img */}
                    <div className="w-full bg-black/70 p-1 rounded-2xl">
                        <Image
                            className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.1)] relative rounded-2xl"
                            src="/project_images/pasionariaorganicanorte_portada.png"
                            alt="Cover de libro"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Texto */}
                    <div>
                        <h3>Titulo</h3>
                        <h4>Resumen</h4>
                        <p>Fecha</p>
                    </div>

                </div>
            </div>
        </>
    )
}