import Imagens from "../components/Comentarios/Imgens";

export default function PerfilBabeiros (){
    
    return (
        <div className=" mt-20 mb-24">
            <h1 className="
                    text-center mb-14 text-3xl text-zinc-50
                "
            >
                NOSSO TIME
            </h1>
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-16 lg:gap-32">
                <div className="flex flex-col items-center"> 
                    <Imagens
                        src="iago.jpg"
                        alt=" imagem do barbeiro"
                        className=" h-auto rounded-full w-40 sm:w-44 lg:w-52"
                     />
                    <h3 className="text-zinc-50 mt-4 text-xl md:text-2xl">Iago</h3>
                </div>    
                <div className="flex flex-col items-center">
                    <Imagens
                        src="italo.jpg"
                        alt=" imagem do barbeiro"
                        className=" h-auto rounded-full w-40 sm:w-44 lg:w-52"
                    />
                    <h3 className="text-zinc-50 mt-4 text-xl md:text-2xl">italo</h3>
                </div>
                <div className="flex flex-col items-center">
                    <Imagens
                        src="ze.jpg"
                        alt=" imagem do barbeiro"
                        className=" h-auto rounded-full w-40 sm:w-44 lg:w-52"
                    />
                    <h3 className="text-zinc-50 mt-4 text-xl md:text-2xl">ze luis</h3>
                </div>
                
            </div>
        </div>
    )
}