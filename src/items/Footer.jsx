import { Link } from "react-router-dom";
import Imagens from "../components/Comentarios/Imgens";

export default function Footer (){
    return (
        <div className="bg-red-500 flex justify-center i">
            <div className=" mt-11 flex gap-14">
                <Imagens 
                    src="whapps.svg"
                    alt="link whatsApp"
                    className=""
                />

                <Imagens 
                    src="face.svg"
                    alt="facebook"
                    className=""
                />

                <Imagens 
                    src="insta.svg"
                    alt="Instagram"
                    className=""
                />
            </div>
            <div>
                <a href="home">Home</a>
                <a href="home">Home</a>
                <a href="home">Home</a>
                <a href="home">Home</a>
            </div>

            
        </div>
    )
}