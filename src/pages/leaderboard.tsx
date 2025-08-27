// import React from 'react';
import LeaderboardRow from "../components/leaderboardRow";
import { leaderboardData } from "../data/mockData";

export default function Leaderboard() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Community Leaders</h1>
        <p className="page-subtitle">
          Celebrating our top volunteers and their amazing contributions
        </p>
      </div>

      <div className="leaderboard-container">
        {leaderboardData.map((volunteer, index) => (
          <LeaderboardRow
            key={volunteer.id}
            volunteer={volunteer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
