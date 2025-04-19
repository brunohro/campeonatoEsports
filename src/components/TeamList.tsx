import React from "react";

type GameName = "Valorant" | "CS2" | "LoL" | "Free Fire";

type Team = {
  name: string;
  nameJogo: GameName;
  players: string[];
};

type TeamListProps = {
  teams: Team[];
};

const TeamList: React.FC<TeamListProps> = ({ teams }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-6 space-y-4 max-w-lg flex-col">
        {teams.map((team, index) => (
          <div key={index} className="bg-white p-6 pr-16 rounded-xl shadow">
            <div className="flex flex-col">
              <div className="flex gap-4">
                <h2 className="text-xl font-semibold text-orange-600">
                  Equipe:
                </h2>
                <h2 className="text-xl font-bold text-blue-700">{team.name}</h2>
              </div>
              <div className="flex gap-4">
                <h2 className="text-xl font-semibold text-orange-600">Jogo:</h2>
                <h2 className="text-xl font-bold text-blue-700">
                  {team.nameJogo}
                </h2>
              </div>
            </div>
            <ul className="list-disc ml-6 text-gray-700">
              {team.players.map((player, i) => (
                <li key={i}>{player}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
