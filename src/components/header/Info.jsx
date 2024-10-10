import Botao from "../Botao";

export default function Info(){
    return(
        <div className="flex justify-between items-center gap-4">
                <div className="flex gap-2 mr-16">
                    <img src="tel.svg" alt="telefone"/>
                    <p><a href="tel:+315999999999"
                        className="text-zinc-50 text-xl"
                    >
                        999 999 999
                    </a></p>
                </div>

                <div className="flex gap-2">
                    <img src="map.svg" alt="Localizacao"/>
                    <p><a href="https://maps.app.goo.gl/4eMHsGHJxseGA7YLA" target="_blank"
                        className="text-zinc-50 text-xl"
                    >
                        R. Antero de Quental 263
                    </a></p>
                </div>
                <div className="flex mx-16">
                    <Botao name="agendamento" className="bg-red-500 p-2 rounded-md"/>
                </div>
                
        </div>
    )
}