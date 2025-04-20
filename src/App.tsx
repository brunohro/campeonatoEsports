import { useState } from "react";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import TeamList from "./components/TeamList";
import SectionDescription from "./components/SectionDescription";
import SectionDate from "./components/SectionDate";
import Form from "./components/Form";

type GameName = "Valorant" | "CS2" | "LoL" | "Free Fire";

type Team = {
  id: string;
  name: string;
  nameJogo: GameName;
  email: string;
  players: string[];
};

function App() {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: uuidv4(),
      name: "Teste1",
      nameJogo: "Free Fire",
      email: "teste@gmail.com",
      players: ["João", "Maria", "Pedro", "Lucas"],
    },
    {
      id: uuidv4(),
      name: "TesteDois",
      nameJogo: "Free Fire",
      email: "teste2@gmail.com",
      players: ["Ana", "Carlos", "Beatriz", "Rafael"],
    },
  ]);

  const onAddTeamSubmit = (
    name: string,
    nameJogo: GameName,
    email: string,
    players: string[]
  ) => {
    const newTeam = {
      id: uuidv4(),
      name,
      nameJogo,
      email,
      players,
    };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  return (
    <div className="bg-gray-100">
      <Header>CAMPEONATO DE JOGOS ELETRÔNICOS</Header>
      <div className="max-w-2xl mt-8 bg-white py-8 px-8 flex flex-col gap-12 mx-auto shadow-2xl rounded-xl space-y-4">
        <SectionDescription />
        <SectionDate />
        <Form onAddTeamSubmit={onAddTeamSubmit} />
        <TeamList teams={teams} />
      </div>
    </div>
  );
}

export default App;
