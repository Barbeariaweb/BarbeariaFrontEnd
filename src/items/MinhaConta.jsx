import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function MinhaConta() {

    const [clickSenha,setClickSenha] = useState (false)

    const verSenha = () => {
        setClickSenha (!clickSenha)
    }

    return (
        <>
            <form className="flex flex-col gap-4 m-5">
                <div className="flex flex-col gap-5">
                    <label className="text-zinc-50 text-lg" htmlFor="username">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        required
                        className="p-2 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500
                            border-transparent transition-colors border-[2px]
                        "
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <label className="text-zinc-50 text-lg" htmlFor="Password">
                        Senha:
                    </label>
                    <div className="relative">
                        <input
                            type={clickSenha ?"text" : "password"}
                            id="Password"
                            required
                            className="p-2 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500
                            border-transparent transition-colors border-[2px] w-full"
                        />
                        <button 
                            type="button"
                            onClick={verSenha}
                            className="absolute right-2 top-4 text-gray-500"
                        >
                           {clickSenha ? <AiFillEyeInvisible />  : <AiFillEye /> } 
                        </button>
                    </div>
                    
                    <h3 className="text-center mt-7 mb-5 text-slate-400">
                        Esqueci minha senha
                    </h3>
                    <Link
                        to={"/home"}
                        className="flex justify-center bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors"
                    >
                        Entrar
                    </Link>
                </div>
            </form>
        </>
    );
}
