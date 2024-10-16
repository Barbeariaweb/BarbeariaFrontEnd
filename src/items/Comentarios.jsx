import Botao from "../components/Botao";
import Imagens from "../components/Comentarios/Imgens";
import InputComentario from "../components/Comentarios/Input";

export default function Comentarios() {
    return (
        <div id="comentario" className="mt-28 mx-10 mb-28 md md:ml-28">
            <h1 className="text-zinc-50  text-4xl  md:text-3xl  pb-5">
                Comentário
            </h1>
            <div className="flex">
                <Imagens
                    src="user.svg"
                    alt="foto de perfil"
                    className="rounded-full w-16 h-auto"
                />
                <InputComentario />
                <div />
                <Botao
                    name="Comentar"
                    className="mt-14 -ml-20 md:-ml-48 bg-red-500 p-2 rounded-md md:w-48"
                />
            </div>
        </div>
    );
}
