

export default function Barbeiros ({titulo,texto, className,classNameTexto ,classNameDiv}) {
    return(
        <div 
            className={classNameDiv}
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
        
    </div>
    )
}