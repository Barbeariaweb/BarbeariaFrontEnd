import { useLocation } from "react-router-dom";

export default function ImagsLogin() {
    const { pathname } = useLocation();
    return (
        <div
            className={`hidden sm:block h-full w-full bg-cover bg-center 
            ${pathname === "/" ? "bg-img-purple" : "bg-img-novo"}
        `}
        />
    );
}
