import Botao from "../components/Botao";
import Imagens from "../components/Comentarios/Imgens";
import InputComentario from "../components/Comentarios/Input";

export default function Comentario () {
    return (
        <div className="mt-28 ml-28 mb-28">
            <h1 className="text-3xl text-zinc-50 pb-5">Comentário</h1>
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
                    className="mt-14 -ml-48 bg-red-500 p-2 rounded-md w-48"
                />
            </div>
        </div>
    )
}