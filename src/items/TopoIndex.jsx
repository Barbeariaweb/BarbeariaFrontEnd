import Barbeiros from "../components/header/Barbeiros";
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Index() {
    return (
        <div className="relative bg-img-home w-full bg-cover bg-center h-screen">
            <div className="absolute inset-0 bg-black opacity-70">
                <header
                    className="relative z-0 flex justify-between items-center pt-11"
                >
                    <Logo/>
                    <Info/>
                </header>
               <Barbeiros 
                    titulo="Babearia Lotos"
                    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel igendi, at error reiciendis tempora"
                    className="text-zinc-50 text-xl mb-5 "
                    classNameTexto=" w-80 text-slate-50 mb-5"
               />
            </div>
            
        </div>
    )
}