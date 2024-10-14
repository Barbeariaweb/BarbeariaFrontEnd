import Botao from "../components/Botao";
import Barbeiros from "../components/header/Barbeiros";
import Imagens from "../components/Comentarios/Imgens";

export default function MeioIndex(){
    return(
        <div className="flex items-center justify-between mt-28 mb-28 space-x-6">

            <Imagens
                src="image1.jpg"
                alt="barbeiro contando cabelo"
                className="w-96 h-auto rounded-r-md"
            />

            <div className="flex flex-col justify-center   space-y-4">

                <Barbeiros
                        classNameDiv="mx-28 p-4"
                        className="text-zinc-50 text-2xl mb-5 "
                        titulo="Agende seu corte"
                        texto="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi rem nihil amet reiciendis eaque assumenda voluptate accusantium inventore, quae sint, possimus, quam veniam facilis "
                        classNameTexto="w-96 text-zinc-50"
                    />
                    <Botao name="Agende seu corte"
                        className=" bg-red-600 text-zinc-50 p-2 rounded-md mx-32 w-72"
                    />
            </div>
                
            <Imagens
                src="image2.jpg"
                alt="barbeiro contando cabelo"
                className="w-96 h-auto rounded-l-md"
            />
        </div>
    )
}