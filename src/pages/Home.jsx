import ManINdex from "../items/manIndex";
import Servicos from "../items/Servicos";
import TopoIndex from "../items/TopoIndex";

export default function Home() {
    return (
        <div>
            <TopoIndex/>
            <ManINdex/>
            <Servicos/>
        </div>
    )
}