export default function Botao({ name, className, onClick }) {
    return (
        <>
            <button className={className} onClick={onClick}>
                {name}
            </button>
        </>
    );
}
