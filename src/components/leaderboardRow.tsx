// import React from 'react';

type Volunteer = {
  name: string;
  contributions: number;
  points: number;
};

type LeaderboardRowProps = {
  volunteer: Volunteer;
  index: number;
};

export default function LeaderboardRow({
  volunteer,
  index,
}: LeaderboardRowProps) {
  const getRankClass = (rank: number) => {
    if (rank === 1) return "first";
    if (rank === 2) return "second";
    if (rank === 3) return "third";
    return "";
  };

  return (
    <div className="leaderboard-item">
      <div className={`rank ${getRankClass(index + 1)}`}>#{index + 1}</div>
      <div className="volunteer-info">
        <div className="volunteer-name">{volunteer.name}</div>
        <div className="volunteer-contributions">
          {volunteer.contributions} contributions
        </div>
      </div>
      <div className="points">{volunteer.points} pts</div>
    </div>
  );
}
