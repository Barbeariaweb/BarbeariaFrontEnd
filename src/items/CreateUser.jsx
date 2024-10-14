
export default function CreateUser() {
    return (
      <>
        <form className="flex flex-col gap-4 m-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-zinc-50 text-lg" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                required
                className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-zinc-50 text-lg" htmlFor="telefone">
                Telemóvel:
              </label>
              <input
                type="tel"
                id="telefone"
                required
                className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
              />
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1 w-full">
              <label className="text-zinc-50 text-lg" htmlFor="Password">
                Senha:
              </label>
              <input
                type="password"
                id="Password"
                required
                className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="text-zinc-50 text-lg" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                required
                className="p-1 rounded-lg bg-zinc-200 focus:outline-none focus:border-red-500 border-transparent transition-colors border-[2px]"
              />
            </div>
          </div>
  
          <button className="mt-7 flex justify-center bg-red-500 rounded-md p-2 hover:bg-red-400 transition-colors">
            Criar
          </button>
        </form>
      </>
    );
  }
  