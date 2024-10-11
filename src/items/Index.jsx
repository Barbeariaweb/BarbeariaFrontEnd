import Botao from "../components/Botao";
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Index() {
    return (
        <div className="bg-img-home w-full bg-cover bg-center h-screen">
            <header
                className="flex justify-between items-center pt-11"
            >
                <Logo/>
                <Info/>
            </header>
            <div className="mt-32 mx-28">
                <h2>Babearia Lotos</h2>
                <div className="">
                    <p className="w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vel igendi, at error reiciendis tempora.</p>
                </div>
                <Botao name="Conheça teus barbeiros " className="bg-red-500"/>
            </div>
        </div>
    )
}