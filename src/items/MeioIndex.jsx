import Botao from "../components/Botao";
import Barbeiros from "../components/header/Barbeiros";
import Imagens from "../components/Comentarios/Imgens";

export default function MeioIndex(){
    return(
        <div 
        className="
            flex flex-col items-center justify-between mt-12 mb-12 space-y-6
                md:flex-row md:space-y-0 md:space-x-6 md:mt-28 md:mb-28
        ">

            <Imagens
                src="image1.jpg"
                alt="barbeiro contando cabelo"
                className=" w-full md:w-1/3 h-auto rounded-r-md"
            />

            <div id="agenda" className="flex flex-col justify-center items-center md:w-1/3 space-y-4">

                <Barbeiros
                        classNameDiv="mx-28 p-4"
                        className="text-zinc-50 text-2xl mb-5 "
                        titulo="Agende seu corte"
                        texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi rem nihil amet reiciendis eaque assumenda voluptate accusantium inventore, quae sint, possimus, quam veniam facilis "
                        classNameTexto="w-80 text-zinc-50"
                    />
                    <Botao name="Agende seu corte"
                        className=" bg-red-600 text-zinc-50 p-2 rounded-md mx-32 w-72"
                    />
            </div>
                
            <Imagens
                src="image2.jpg"
                alt="barbeiro contando cabelo"
                className="w-full md:w-1/3 h-auto rounded-l-md"
            />
        </div>
    )
}