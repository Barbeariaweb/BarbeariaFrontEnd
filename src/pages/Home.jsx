import MeioIndex from "../items/MeioIndex";
import Servicos from "../items/Servicos";
import TopoIndex from "../items/TopoIndex";

export default function Home() {
    return (
        <div>
            <TopoIndex/>
            <MeioIndex />
            <Servicos/>
        </div>
    )
}