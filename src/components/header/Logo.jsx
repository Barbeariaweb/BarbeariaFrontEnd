import { useState } from "react";
import Botao from "../Botao";
import { FiAlignJustify } from "react-icons/fi";

export default function Logo() {
    const [lateralNave, setLateralNave] = useState(false);

    const clickNave = () => {
        setLateralNave(!lateralNave);
    };

    return (
        <div className="flex relative">
            <span
                className="        
                text-zinc-50 text-3xl mx-10 lg:mx-28
            "
            >
                Babearia Lotos
            </span>

            <Botao
                name={
                    <>
                        <FiAlignJustify className="text-4xl text-zinc-50" />
                    </>
                }
                className="md:hidden ml-9"
                onClick={clickNave}
            />

            {lateralNave && (
                <div className="fixed right-0 top-0 h-full w-64 bg-zinc-800 p-5 shadow-lg ">
                    <button
                        className="mb-4 text-right text-4xl text-zinc-50 "
                        onClick={clickNave}
                    >
                        &times;
                    </button>
                    <div className="flex mt-3 gap-4">
                        <img src="tel.svg" alt="telefone" />
                        <p>
                            <a
                                href="tel:+315999999999"
                                className="text-zinc-50 text-xl "
                            >
                                999 999 999
                            </a>
                        </p>
                    </div>
                    <div className="flex mt-3 gap-4">
                        <img
                            src="map.svg"
                            alt="Localizacao"
                            className="text-zinc-50"
                        />
                        <p>
                            <a
                                href="https://maps.app.goo.gl/4eMHsGHJxseGA7YLA"
                                target="_blank"
                                className="text-zinc-50 text-xl"
                            >
                                R. Antero de Quental 263
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
