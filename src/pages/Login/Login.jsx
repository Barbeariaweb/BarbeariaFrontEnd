
import { Outlet } from "react-router-dom";
import Button from "../../components/Login/ButtonLogin";
import ImagsLogin from "../../components/Login/ImagsLogin";

export default function Login() {
  return (
    <div className=" grid grid-cols-2 h-screen">
      <ImagsLogin />
      <div className="flex justify-center items-center">
        <div className="py-10 px-10 w-full flex flex-col items-center">
          <img className="mb-3 w-12 h-auto mx-auto" src="tesoura.svg" alt="" />
          <div className=" flex flex-col gap-7">
            <Button />
            
           <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
