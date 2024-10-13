import Botao from "../Botao";

export default function ServicoItem ({service,details,value}) {
    return(
        <>
            <div className="mt-16 text-2xl text-zinc-50">
                <h1 className="my-3">{service}</h1>
                <span>{details}</span>
                <hr className="my-3 border-zinc-800" />
            </div>
            <div className="mt-16 text-2xl flex justify-around w-96 items-start text-zinc-50   ">
                <span className="ml-24 ">{value}</span>
                <Botao
                    name="Selecionar"
                    className=" bg-zinc-900  p-2 rounded-md ml-14 w-48 "
                />
            </div>
        </>
       
    )
    
}