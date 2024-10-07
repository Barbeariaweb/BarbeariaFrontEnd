export default function Button(){
    const btn ="p-3  w-30";
    return(
        <div className="inline-flex m-3 space-x-2 text-teal-50 text-xl">
            <button className={`${btn}`}>Acedar a sua conta</button>
            <button className={`${btn}`}>Acedar a sua conta</button>
        </div>
    )
}