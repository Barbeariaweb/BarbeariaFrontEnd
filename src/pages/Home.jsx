
import Info from "../components/header/Info";
import Logo from "../components/header/Logo";

export default function Home() {
    return (
        <div className=" w-full bg-cover bg-center h-screen" style={{background:"url('/homen.jpg')"}}>
            <header
                className="flex justify-between items-center m-11 "
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