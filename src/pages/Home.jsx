import Comentario from "../items/comentario";
import Footer from "../items/Footer";
import MeioIndex from "../items/MeioIndex";
import Servicos from "../items/Servicos";
import TopoIndex from "../items/TopoIndex";

export default function Home() {
    return (
        <div>
            <TopoIndex/>
            <MeioIndex />
            <Servicos/>
            <Comentario/>
            <Footer />
        </div>
    )
}