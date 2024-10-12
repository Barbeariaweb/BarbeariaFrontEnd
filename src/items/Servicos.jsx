import { useState } from "react";
import Botao from "../components/Botao";

export default function Servicos (){
    const [clickDetails, setClickDetails] = useState(false)
    return (
        <div className="mt-28 bg-red-500 h-auto flex  px-28 py-10">
            
                <div className="  text-4xl text-zinc-50">
                    <h1>Procurar serviço</h1>
                    <hr className="mt-3 w-64 border-zinc-800 border-2 rounded-md" />
                    <div className="mt-6">
                        <Botao 
                            name="Corte (7) "
                            className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900 text-xl
                                w-52 flex p-2 mt-6 rounded-md shadow-lg
                            "
                            onClick={()=> setClickDetails(!clickDetails)}
                        />
                        <Botao 
                            name="Coloração (2)"
                            className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl
                                w-52 flex p-2 mt-6 rounded-md shadow-lg 
                            " />
                        <Botao 
                            name="Tratamento Cabelo & Couro Cabeludo (3)"
                            className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl
                                flex p-2 mt-6 rounded-md  shadow-xl
                            " />
                    </div>
                </div>
                {clickDetails && (
                    <div className="mt-16 text-2xl ml-44 text-zinc-50">
                        <h1 className="my-3">Corte</h1>
                        <span>45 mins Mostrar Detalhes</span>
                        <hr className="my-3 border-zinc-800" />

                        <h1 className="my-3">Corte</h1>
                        <span>45 mins Mostrar Detalhes</span>
                        <hr className="my-3 border-zinc-800" />
                        
                        <h1 className="my-3">Corte</h1>
                        <span>45 mins Mostrar Detalhes</span>
                        <hr className="my-3 border-zinc-800" />
                    </div>
                )}
                
        </div>
    )
}