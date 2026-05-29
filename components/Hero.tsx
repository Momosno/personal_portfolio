import Image from "next/image"
import { FaSortDown } from "react-icons/fa6"

export default function Hero() {
    return (
        <div className="min-h-dvh w-full flex flex-col justify-center items-center bg-linear-to-b from-naranja-primario to-intermedio-primario p-5">
            <div className="flex flex-col-reverse md:items-center md:flex-row text-center h-full gap-16 mb-8">
                <Image
                    className="drop-shadow-[0px_40px_20px_rgba(0,0,0,0.4)]"
                    src="/svg/hero.svg"
                    alt="Ulises programando con su gato"
                    width={500}
                    height={500}
                />
                <div>
                    <h1 className="font-erica-one text-rojo-primario md:text-6xl text-5xl">Welcome, I am <br /><span>Ulises D'Agostino</span></h1>
                </div>
            </div>
            <div className="absolute bottom-3 flex flex-col items-center">
                <p className="font-nunito font-bold text-xl md:text-2xl font text-rojo-primario/50 -mb-2" >Proyectos</p>
                <div className="text-2xl  font-nunito font-bold text-rojo-primario/50"><FaSortDown /></div>
            </div>
        </div>
    )
}
