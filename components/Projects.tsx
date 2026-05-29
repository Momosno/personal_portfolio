import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
export default function Projects() {
    return (
        <div className="min-h-dvh relative flex justify-center items-center bg-linear bg-linear-to-b to-rojo-primario from-intermedio-primario p-5">


            {/* mobile */}
            <div className="block md:hidden">
                {/* Nav Arrows */}

                <Image
                    className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.7)]"
                    src="/svg/book-cover.svg"
                    alt="Cover de libro"
                    width={500}
                    height={500}
                />


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