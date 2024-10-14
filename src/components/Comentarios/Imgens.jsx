export default function Imagens ({src,alt,className}){
    return (
        <>
            <div className="object-fill">
                <img src={src} alt={alt}
                    className={className}
                />
            </div>
        </>
    )
}