import { useState } from "react";
import Botao from "../components/Botao";
import ServicoItem from "../components/ServicoItem/ServicoItem";

export default function Servicos() {
    const [selectedService, setSelectedService] = useState(null);

    const toggleService = (servece) => {
        setSelectedService((prevServece) =>
            prevServece === servece ? null : servece,
        );
    };
    return (
        <div
            id="Servicos"
            className=" 
                bg-red-500 h-full px-9 py-10
                md:h-auto md:flex  md:px-28 md:py-10
            "
        >
            <div className="  text-4xl text-zinc-50">
                <h1>Procurar serviço</h1>
                <hr className="mt-3 w-64 border-zinc-800 border-2 rounded-md" />
                <div className="mt-6">
                    <Botao
                        name="Corte (7) "
                        className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900 text-xl hover:bg-red-600
                                w-52 flex p-2 mt-6 rounded-md shadow-lg
                            "
                        onClick={() => toggleService("Corte")}
                    />
                    <Botao
                        name="Corte Homem (2)"
                        className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl hover:bg-red-600
                                w-52 flex p-2 mt-6 rounded-md shadow-lg
                            "
                        onClick={() => toggleService("CorteHomem")}
                    />

                    <Botao
                        name="Tratamento Cabelo & Couro Cabeludo (1)"
                        className="
                                text-zinc-50 focus:bg-zinc-200 focus:text-zinc-900  text-xl hover:bg-red-600
                                flex p-2 mt-6 rounded-md  shadow-xl
                            "
                        onClick={() => toggleService("Tratamento")}
                    />
                </div>
            </div>
            {selectedService === "Corte" && (
                <div className="grid grid-cols-2  xl:ml-72 lg:ml-60  md:ml-48 sm:ml-24">
                    <ServicoItem
                        service="Corte"
                        details="45 mins Mostrar Detalhes"
                        value="15€"
                    />

                    <ServicoItem
                        service="Corte"
                        details="45 mins Mostrar Detalhes"
                        value="15€"
                    />

                    <ServicoItem
                        service="Corte"
                        details="45 mins Mostrar Detalhes"
                        value="15€"
                    />
                </div>
            )}

            {selectedService === "CorteHomem" && (
                <div className="grid grid-cols-2  xl:ml-72 lg:ml-60  md:ml-48 sm:ml-24">
                    <ServicoItem
                        service="Corte de Cabelo + Barba"
                        details="1 hr 15 mins "
                        value="17€"
                    />

                    <ServicoItem
                        service="Corte de Cabelo + Barba + Sobrancelha"
                        details="1 hr 30 mins"
                        value="20€"
                    />
                </div>
            )}

            {selectedService === "Tratamento" && (
                <div className="grid grid-cols-2  xl:ml-72 lg:ml-60  md:ml-48 sm:ml-24">
                    <ServicoItem
                        service="Hidratação Capilar"
                        details="15 mins"
                        value="10€"
                    />
                </div>
            )}
        </div>
    );
}
