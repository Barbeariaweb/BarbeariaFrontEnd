import Botao from "../components/Botao";
import Barbeiros from "../components/header/Barbeiros";
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Index() {
    return (
        <div 
            id="home" 
            className="
                relative bg-img-home w-full bg-cover bg-center h-[34rem]
                
            ">
                
            <div 
                className="
                    absolute  bg-gradient-to-b from-transparent to-black h-full
                    md:inset-0
                ">
                <header
                    className="
                        relative z-0 pt-11 md:flex md:justify-between md:items-center 
                    "
                >
                    <Logo/>
                    <Info/>
                </header>
                <div className="">
                    
                </div>
               <Barbeiros 
                    classNameDiv="mt-32 mx-10 lg:mx-28"
                    titulo="Babearia Lotos"
                    texto="Descubra o corte perfeito para você. Nossos barbeiros estão prontos para atender suas necessidades."
                    className="text-zinc-50 text-xl mb-5 "
                    classNameTexto=" w-80 text-slate-50 mb-5"
               />
               <Botao name="Conheça os teus barbeiros"
                className="
                    bg-red-600  text-zinc-50 p-2 rounded-md mx-10
                    lg:mx-28
                "
                />
            </div>
            
        </div>
    )
}
