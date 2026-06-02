import Image from "next/image";
import Project from "@/types/Project";



export default function ProjectsInfo({ project }: { project: Project }) {
    return (
        <>
            {/* Mobile */}
            <div className=" md:hidden absolute top-0 left-0 pt-4 pl-12 pr-5 pb-16 w-full h-full flex justify-center items-center">
                {/* Contenedor General */}
                <div className="h-full w-full flex flex-col gap-6  text-center justify-center items-center">
                    {/* Img */}
                    <div className="w-full h-1/2 bg-black/70 p-1 rounded-2xl">
                        <Image
                            className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.1)] relative h-full object-cover rounded-2xl"
                            src="/project_images/pasionariaorganicanorte_portada.png"
                            alt="Cover de libro"
                            width={500}
                            height={500}
                        />
                    </div>

                    {/* Texto */}
                    <div className="w-full  flex flex-col justify-between h-1/3 bg-black/50 rounded-xl p-4">
                        <div className="w-full font-montserrat flex flex-col justify-between h-full">
                            <div className="flex flex-col gap-0.5">
                                <hr className="border" />
                                <h3 className="font-nunito font-bold text-xl">{project.name}</h3>
                                <hr className="border" />
                            </div>
                            <h4 >{project.subtitle}</h4>
                            <div className="flex flex-col justify-between gap-3">
                                <p >{project.period}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}