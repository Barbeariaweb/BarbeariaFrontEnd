import Botao from "../Botao";

export default function Info() {
    return (
        <div className="hidden  justify-between items-center gap-4 md:flex md:gap-0 lg:gap-5">
            <div className="flex md:gap-2 md:mr-2 lg:gap-3 lg:mr-3">
                <img src="tel.svg" alt="telefone" />
                <p>
                    <a
                        href="tel:+315999999999"
                        className="text-zinc-50 text-xl"
                    >
                        999 999 999
                    </a>
                </p>
            </div>

            <div className="flex gap-2 ">
                <img src="map.svg" alt="Localizacao" className="text-zinc-50" />
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
            <div className="flex mx-5 md:mx-5 lg:mr-12">
                <Botao
                    name="agendamento"
                    className="
                            bg-red-500 p-2 rounded-md text-zinc-50 border border-zinc-900
                            hover:bg-red-400 hover:text-zinc-100 transition-colors
                    "
                />
            </div>
        </div>
    );
}
