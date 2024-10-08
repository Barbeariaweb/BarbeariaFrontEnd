export default function MinhaConta(){
    return(
        <form className="flex flex-col gap-4 m-5 ">
            <div className="flex flex-col gap-5 ">
            <label className="text-zinc-50 text-lg" htmlFor="username">
                Username:
            </label>
            <input
                type="text"
                id="username"
                required
                className="
                    p-2 rounded-lg bg-zinc-200 focus: outline-none focus:border-red-500
                    border-transparent transition-colors border-[2px]
                "
            />
            </div>
            <div className="flex flex-col gap-4">
            <label className="text-zinc-50 text-lg" htmlFor="Password">
                Senha:
            </label>
            <input
                type="password"
                id="Password"
                required
                className="
                    p-2 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500
                    border-transparent transition-colors border-[2px] 
                    "
            />

            <h3 
                className="
                    text-center mt-7 mb-5
                    text-slate-400
                "
            >
                Esqueci minha senha
            </h3>
            <button 
            className="
                flex  justify-center 
                bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors
            ">
            Entrar
            </button>
            </div>
              
         </form>
    )
}