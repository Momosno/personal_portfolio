'use client'
import BookCover from "@/components/svg/BookCover"
import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Project from "@/types/Project";
import ProjectsInfo from "./ProjectsInfo";

export default function Projects({ projects }: { projects: Project[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    function prevProject() {
        if (currentIndex != 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    function nextProject() {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }



    return (
        <div className=" relative flex justify-center items-center bg-linear bg-linear-to-b to-rojo-primario from-intermedio-primario px-5 py-24 font-nunito">
            <div className="block md:hidden w-full px-4">

                {/* mobile */}
                <div className="relative  w-full">
                    <BookCover
                        color={projects[currentIndex].color}
                        className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.7)] "

                    />
                    <ProjectsInfo project={projects[currentIndex]} />

                </div>
                {/* Nav Arrows */}
                <div>
                    <div onClick={prevProject} className="cursor-pointer absolute bottom-10 text-4xl left-3 text-naranja-primario/60 hover:text-naranja-primario "><FaChevronLeft /></div>
                    <div onClick={nextProject} className="cursor-pointer absolute bottom-10 text-4xl right-3 text-naranja-primario/60 hover:text-naranja-primario"><FaChevronRight /></div>
                </div>
            </div>
            {/* Desktop */}
            <div className="hidden md:block">
                <div>
                    <Image
                        className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.7)]"
                        src="/svg/book.svg"
                        alt="Open Book"
                        width={850}
                        height={750}
                    />
                    <div onClick={prevProject} className="absolute bottom-1/2 text-4xl left-5 text-naranja-primario/60 hover:text-naranja-primario "><FaChevronLeft /></div>
                    <div onClick={nextProject} className="absolute bottom-1/2 text-4xl right-5 text-naranja-primario/60 hover:text-naranja-primario"><FaChevronRight /></div>
                </div>
            </div>
        </div>
    )
}