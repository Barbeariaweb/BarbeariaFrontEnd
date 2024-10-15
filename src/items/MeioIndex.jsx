import Botao from "../components/Botao";
import Barbeiros from "../components/header/Barbeiros";
import Imagens from "../components/Comentarios/Imgens";

export default function MeioIndex(){
    return(
        <div 
            className="
                flex flex-col items-center  mt-28 mb-28 
                md:flex-row md:space-y-0 md:space-x-1 md:justify-between
            ">

            <Imagens
                src="image1.jpg"
                alt="barbeiro contando cabelo"
                className="
                    rounded-md w-full max-w-xs mx-auto  h-auto 
                    md:rounded-none md:rounded-r-md md:w-60 lg:w-96
                "
            />

            <div 
                id="agenda" 
                className="
                    flex flex-col justify-center space-y-4 mb-10
                    md:mt-4 md:mx-auto md:w-full  md:space-y-4
                ">

                <Barbeiros
                        classNameDiv="mx-auto p-2 "
                        className="text-zinc-50 text-2xl mb-5 text-center mt-3 md:text-left  "
                        titulo="Agende seu corte"
                        texto="Descubra o corte perfeito para você. Nossos barbeiros estão prontos para atender suas necessidades."
                        classNameTexto="
                            w-full max-w-xs mx-auto text-zinc-50 text-center text-justify p-1 
                            md:w-96 md:max-w-full md:mx-0 md:text-lg lg:text-xl
                        "
                    />
                    <Botao name="Agende seu corte"
                        className="
                            bg-red-600 text-zinc-50 p-2 rounded-md w-full max-w-xs mx-auto
                            md:mx-11 lg:mx-[440px] 
                        "
                        
                    />
            </div>
                
            <Imagens
                src="image2.jpg"
                alt="barbeiro contando cabelo"
                className="
                    rounded-md w-full max-w-xs mx-auto h-auto 
                    md:rounded-none md:rounded-l-md md:w-60 lg:w-96
                "
            />
        </div>
    )
}