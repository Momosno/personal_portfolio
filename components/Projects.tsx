'use client'
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import ProjectsInfo from "./ProjectsInfo";
import Project from "@/types/Projects";
import { useState } from "react";

export default function Projects({ projects }: { projects: Project[] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className=" relative flex justify-center items-center bg-linear bg-linear-to-b to-rojo-primario from-intermedio-primario px-5 py-24 font-nunito">
            <div className="block md:hidden ">

                {/* mobile */}
                <div className="block md:hidden relative">
                    <Image
                        className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.7)] relative"
                        src="/svg/book-cover.svg"
                        alt="Cover de libro"
                        width={500}
                        height={500}
                    />
                    <ProjectsInfo />

                </div>
                {/* Nav Arrows */}
                <div>
                    <div className="absolute bottom-10 text-4xl left-3 text-naranja-primario/60 hover:text-naranja-primario "><FaChevronLeft /></div>
                    <div className="absolute bottom-10 text-4xl right-3 text-naranja-primario/60 hover:text-naranja-primario"><FaChevronRight /></div>
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
                    <div className="absolute bottom-1/2 text-4xl left-5 text-naranja-primario/60 hover:text-naranja-primario "><FaChevronLeft /></div>
                    <div className="absolute bottom-1/2 text-4xl right-5 text-naranja-primario/60 hover:text-naranja-primario"><FaChevronRight /></div>
                </div>
            </div>
        </div>
    )
}