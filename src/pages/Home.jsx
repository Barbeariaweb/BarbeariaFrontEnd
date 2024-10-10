
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Home() {
    return (
        <div className="bg-img-home w-full bg-cover bg-center h-screen">
            <header
                className="flex justify-between items-center m-11 bg-img-home "
            >
                <Logo/>
                <Info/>
            </header>
            <div>
                teste
            </div>
        </div>
    )
}