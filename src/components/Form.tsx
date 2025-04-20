import { useState, FormEvent } from "react";

type GameName = "Valorant" | "CS2" | "LoL" | "Free Fire";

type FormProps = {
  onAddTeamSubmit: (
    name: string,
    nameJogo: GameName,
    email: string,
    players: string[]
  ) => void;
};

export default function Form({ onAddTeamSubmit }: FormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameJogo, setNameJogo] = useState<GameName>("Valorant");
  const [playerInput, setPlayerInput] = useState("");
  const [players, setPlayers] = useState<string[]>([]);

  const handleAddPlayer = () => {
    if (playerInput.trim()) {
      setPlayers((prev) => [...prev, playerInput.trim()]);
      setPlayerInput("");
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !nameJogo.trim() ||
      players.length === 0
    ) {
      return alert(
        "Preencha todos os campos corretamente e adicione jogadores!"
      );
    }

    onAddTeamSubmit(name, nameJogo, email, players);

    // Resetar o formulário
    setName("");
    setEmail("");
    setNameJogo("Valorant");
    setPlayers([]);
    setPlayerInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 space-y-4 bg-gray-200 shadow rounded-xl"
    >
      <h2 className="font-bold text-center text-blue-500 text-2xl">
        SE CADASTRANDO...
      </h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nome:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          placeholder="Nome"
          type="text"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          E-mail:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
          placeholder="E-mail"
          type="email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nome do jogo:
        </label>
        <select
          value={nameJogo}
          onChange={(e) => setNameJogo(e.target.value as GameName)}
          className="mt-1 w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
        >
          <option value="Valorant">Valorant</option>
          <option value="CS2">CS2</option>
          <option value="LoL">LoL</option>
          <option value="Free Fire">Free Fire</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Jogador
        </label>
        <div className="flex gap-2 mt-1">
          <input
            value={playerInput}
            onChange={(e) => setPlayerInput(e.target.value)}
            className="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2"
            placeholder="Nome do jogador"
            type="text"
          />
          <button
            type="button"
            onClick={handleAddPlayer}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Adicionar
          </button>
        </div>
        <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
          {players.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleAddPlayer}
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>
  );
}
