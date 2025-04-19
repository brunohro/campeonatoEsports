import { useState } from "react";
import Header from "./components/Header";
import TeamList from "./components/TeamList";
import SectionDescription from "./components/SectionDescription";
import SectionDate from "./components/SectionDate";

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
      <div className="max-w-2xl py-8 flex flex-col gap-12 mx-auto">
        <SectionDescription />
        <SectionDate />
        <TeamList teams={teams} />
      </div>
    </div>
  );
}

export default App;
