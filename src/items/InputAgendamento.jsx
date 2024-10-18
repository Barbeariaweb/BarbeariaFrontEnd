
import DatePicker from "react-datepicker";

export default function InputAgendamento () {
    return (
        <>
            <div className="flex justify-center items-center bg-red-500 h-52">
                <div className="flex justify-center items-start flex-col">
                    <form action="#">
                        <div>
                            <label htmlFor="Barbeiro" className="text-zinc-50 p-5 font-bold">Escolha o seu Barbeiros :</label>
                            <select
                                name="horarios"
                                required
                                className="w-48 p-2 rounded-md bg-zinc-800 text-zinc-50"
                            >
                                <option disabled>....</option>
                                <option value="">Iago</option>
                                <option value="">Italo</option>
                                <option value="">Ze carlos</option>
                            </select>
                        </div>
                        
                        <div className="p-5">
                            <label htmlFor="data" className="p-5 text-zinc-50">Escolha a data:</label>
                            <input type="date" className="rounded-md p-2 bg-zinc-800 text-zinc-50 focus:border-none focus:border-red-500 "/>
                        </div>
                       

                    </form>
                </div>
            </div>
        </>
    )
}