export default function Botao({name,className}){
    return (
        <>
            <button
                className={className}
            >
                {name}
            </button>
        </>
    )
}