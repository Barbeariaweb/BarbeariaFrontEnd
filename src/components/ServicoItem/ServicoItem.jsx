import Botao from "../Botao";

export default function ServicoItem ({service,details,value}) {
    return(
        <>
            <div className="mt-16 text-lg lg:text-2xl text-zinc-50">
                <h1 className="my-3">{service}</h1>
                <span>{details}</span>
                <hr className="my-3 border-zinc-800" />
            </div>
            <div className="
                text-zinc-50 mt-16 flex flex-col justify-around w-full
                lg:text-2xl  lg:flex-row  lg:w-96  lg:items-start   ">
                <span className="ml-20 ">{value}</span>
                <Botao
                    name="Selecionar"
                    className=" bg-zinc-900 mt-6 ml-3 p-2 rounded-lg lg:ml-1 lg:w-40 "
                />
            </div>
        </>
       
    )
    
}