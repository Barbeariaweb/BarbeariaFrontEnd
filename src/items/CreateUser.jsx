import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function CreateUser() {

    const [clickSenha, setClickSenha] = useState (false)
    const versenha = () => {
        setClickSenha (!clickSenha)
    }

    return (
        <>
            <form className="flex flex-col gap-4 m-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            className="text-zinc-50 text-lg"
                            htmlFor="username"
                        >
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            required
                            className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <label
                            className="text-zinc-50 text-lg"
                            htmlFor="telefone"
                        >
                            Telemóvel:
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            required
                            className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1 w-full">
                        <div className="relative">
                            <label
                                className="text-zinc-50 text-lg"
                                htmlFor="Password"
                            >
                                Senha:
                            </label>
                            <input
                                type={clickSenha ?"text " : "password"}
                                id="Password"
                                required
                                className="p-1 rounded-lg bg-zinc-200 focus:outline-none text-lg
                                 focus:border-red-500 border-transparent transition-colors border-[2px] w-full"
                            />
                             <button
                                type="button" 
                                onClick={versenha}
                                className="absolute right-2 bottom-3 text-gray-500"
                            >
                                {clickSenha ? <AiFillEyeInvisible /> : <AiFillEye />}
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 w-full">
                        <label className="text-zinc-50 text-lg" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
                        />
                    </div>
                </div>

                <button className="mt-7 flex justify-center bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors">
                    Criar
                </button>
            </form>
        </>
    );
}
