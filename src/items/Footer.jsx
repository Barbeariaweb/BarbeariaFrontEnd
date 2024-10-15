import Imagens from "../components/Comentarios/Imgens";
import Copyright from "../components/Copyright/Copyright";

export default function Footer() {
    return (
        <>
            <div className="bg-red-500 flex flex-col justify-center w-full mb-9">
                <div className=" mt-11 flex justify-center gap-14">
                    <Imagens
                        src="whapps.svg"
                        alt="link whatsApp"
                        className=""
                    />

                    <Imagens src="face.svg" alt="facebook" className="" />

                    <Imagens src="insta.svg" alt="Instagram" className="" />
                </div>

                <div className="flex justify-center p-3 gap-8 text-zinc-50 mb-11">
                    <a href="#home">Home</a>
                    <a href="#agenda">Agenda</a>
                    <a href="#Servicos">serviços</a>
                    <a href="#comentario">Comentários</a>
                </div>
            </div>
            <Copyright />
        </>
    );
}
