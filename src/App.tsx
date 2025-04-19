import { useState } from "react";
import Header from "./components/header";
import TeamList from "./components/TeamList";

type GameName = "Valorant" | "CS2" | "LoL" | "Free Fire";

type Team = {
  name: string;
  nameJogo: GameName;
  players: string[];
};
function App() {
  const [teams] = useState<Team[]>([
    {
      name: "Teste1",
      nameJogo: "Free Fire",
      players: ["João", "Maria", "Pedro", "Lucas"],
    },
    {
      name: "TesteDois",
      nameJogo: "Free Fire",
      players: ["Ana", "Carlos", "Beatriz", "Rafael"],
    },
  ]);

  return (
    <div>
      <Header>CAMPEONATO DE JOGOS ELETRÔNICOS</Header>

      <TeamList teams={teams} />
    </div>
  );
}

export default App;
