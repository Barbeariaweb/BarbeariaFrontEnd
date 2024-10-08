import { Link, useLocation } from "react-router-dom";


export default function Button({}){
    const {pathname} = useLocation()
    return(
        <div className="inline-flex m-3 space-x-2 text-teal-50 text-xl">
            <Link to={"/"} 
                className={`p-3  w-30 
                    ${
                        pathname === "/"
                        ? "w-30 border-b-2 border-red-400"
                        : "border-red-500"
                    }
                `}
            >Acedar a sua conta</Link>
            <Link to={"new"}
                className={`p-3  w-30
                    ${
                        pathname === "/new"
                        ? "w-30 border-b-2 border-red-500 " 
                        :"border-red-500"
                        
                    }
                `}
            >Criar nova conta</Link>
        </div>
    )
}