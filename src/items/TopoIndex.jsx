import Botao from "../components/Botao";
import Barbeiros from "../components/header/Barbeiros";
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Index() {
    return (
        <div className="relative bg-img-home w-full bg-cover bg-center h-[34rem]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-full">
                <header
                    className="relative  z-0 flex justify-between items-center pt-11"
                >
                    <Logo/>
                    <Info/>
                </header>
               <Barbeiros 
                    classNameDiv="mt-32 mx-28"
                    titulo="Babearia Lotos"
                    texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel igendi, at error reiciendis tempora"
                    className="text-zinc-50 text-xl mb-5 "
                    classNameTexto=" w-80 text-slate-50 mb-5"
               />
               <Botao name="Conheça os teus barbeiros"
                className="
                    bg-red-600 text-zinc-50 p-2 rounded-md mx-28
                "
                />
            </div>
            
        </div>
    )
}