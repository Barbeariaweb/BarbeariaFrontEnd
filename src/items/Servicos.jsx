import Botao from "../components/Botao";

export default function Servicos (){
    return (
        <div className="mt-28 bg-red-500 h-96">
            
                <div className="  text-4xl text-zinc-50  pt-5 px-28">
                    <h1>Procurar serviço</h1>
                    <hr className="mt-3 w-64 border-zinc-800 border-2 rounded-md" />
                    <Botao 
                    name="Corte (7) "
                    className="
                         text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900 text-xl
                         w-52 flex p-2 mt-6 rounded-md shadow-lg
                    "/>
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
    )
}