import Botao from "../Botao";

export default function Barbeiros ({titulo,texto, className,classNameTexto}) {
    return(
        <div 
            className="
                mt-32 mx-28
            "
        >
        <h2 className={className} 
            >
            {titulo}
        </h2>
       
            <p 
                className={classNameTexto}
                >
                {texto}
            </p>
        <Botao name="Conheça os teus barbeiros"
            className="
                bg-red-600 text-zinc-50 p-2 rounded-md
            "
        />
    </div>
    )
}