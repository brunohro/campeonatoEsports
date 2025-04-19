function Form() {
  return (
    <div>
      <form action="" className="max-w-2xl mx-auto p-6 space-y-4">
        <h2 className="font-bold text-center text-blue-500 text-2xl">
          SE CADASTRANDO...
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">
            Nome:
          </label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            placeholder="Nome"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">
            E-mail:
          </label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            placeholder="E-mail"
            type="email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">
            Nome do jogo:
          </label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            placeholder="Nome"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">
            Login
          </label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            placeholder="Login"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="">
            Senha
          </label>
          <input
            className="mt-1 w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-3 py-2"
            placeholder="Senha"
            type="text"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
