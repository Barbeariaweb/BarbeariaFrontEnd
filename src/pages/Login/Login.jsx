import Button from "../../components/Button";
import ImagsLogin from "../../components/Login/ImagsLogin";

export default function Login() {
  return (
    <div className=" grid grid-cols-2 h-screen">
      <ImagsLogin />
      <div className="flex justify-center items-center">
        <div className="py-10 px-10 w-full flex flex-col items-center">
          <img className="mb-3 w-12 h-auto mx-auto" src="Monitores.svg" alt="" />
          <div className=" flex flex-col gap-7">
            <Button />
            <form className="flex flex-col gap-4 m-5 ">
              <div className="flex flex-col gap-5 ">
                <label className="text-zinc-50 text-lg" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  required
                  className="
                        p-2 rounded-lg
                    "
                />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-zinc-50 text-lg" htmlFor="Password">
                  Senha
                </label>
                <input
                  type="password"
                  id="Password"
                  required
                  className="
                        p-2 rounded-lg
                    "
                />

                <h3 
                    className="
                        text-center mt-7 mb-5
                        text-slate-400
                    "
                >
                    Esqueci minha senha
                </h3>
              </div>
              <button 
              
              >
                Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
