export default function InputComentario(){
    return (
        <>
            <input 
                type="text" 
                id="comentar"
                placeholder="Adicione um comentário"
                className="
                    bg-[#171616] border-b-2 ml-2 h-10 w-3/4 md:w-1/2
                    focus:border-red-400 focus:outline-none text-zinc-50
                "
            />
        </>
    )
}