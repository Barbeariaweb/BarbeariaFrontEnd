import { Link, useLocation } from "react-router-dom";
import Barbeiros from "../components/header/Barbeiros";
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Index() {

    const { pathname } = useLocation();

    return (
        <div
            id="home"
            className={`
                relative  w-full bg-cover bg-center h-[34rem]
                ${pathname === "/Barbeiros" ?"bg-img-home2" :"bg-img-home"}
            `}
        >
            <div
                className="
                    absolute  bg-gradient-to-b from-transparent to-black h-full
                    md:inset-0
                "
            >
                <header
                    className="
                        relative z-0 pt-11 md:flex md:justify-between md:items-center 
                    "
                >
                    <Logo />
                    <Info />
                </header>
                <div className=""></div>
                <Barbeiros
                    classNameDiv="mt-32 mx-10 lg:mx-28"
                    titulo="Babearia Lotos"
                    texto="Transforme seu visual com a nossa equipe de especialistas. Cada barbeiro oferece um estilo único para garantir que você encontre o corte perfeito para a sua personalidade."
                    className="text-zinc-50 text-xl mb-5 "
                    classNameTexto=" w-80 text-slate-50 mb-5"
                />
                <Link
                    to={ pathname === "/Barbeiros" ? "/home" :"/Barbeiros"}
                    className="
                    bg-red-600 hover:bg-red-500  text-zinc-50 p-2 rounded-md mx-10
                    lg:mx-28
                "
                >
                    {pathname === "/Barbeiros" ? "Voltar" : "Conheça os teus barbeiros"}
                </Link>
            </div>
        </div>
    );
}
