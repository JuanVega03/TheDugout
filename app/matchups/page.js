'use client';

import { useEffect, useState } from 'react';

export default function MatchupsPage() {
  const [matchupsData, setMatchupsData] = useState(null);

  useEffect(() => {
  fetch('/matchups_data.json')
    .then((res) => {
      console.log("📦 Fetch response:", res);
      return res.json();
    })
    .then((data) => {
      console.log("📊 Datos recibidos:", data);
      setMatchupsData(data);
    })
    .catch((err) => {
      console.error("❌ Error al cargar matchups_data.json:", err);
    });
}, []);

  if (!matchupsData) return <div className="text-white p-6">Cargando datos...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Matchups - {matchupsData.fecha ?? 'Sin fecha'}</h1>

    <pre className="bg-gray-800 text-green-400 text-xs p-4 rounded mb-4 overflow-auto">
      {JSON.stringify(matchupsData, null, 2)}
    </pre>

      <div className="overflow-auto">
        <table className="min-w-full bg-gray-900 border border-gray-700 text-sm">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Starter</th>
              <th className="px-4 py-2">Margin</th>
              <th className="px-4 py-2">Power %</th>
              <th className="px-4 py-2">Proj Runs</th>
              <th className="px-4 py-2">Win%</th>
              <th className="px-4 py-2">WHIP</th>
              <th className="px-4 py-2">ERA</th>
              <th className="px-4 py-2">Lineup</th>
              <th className="px-4 py-2">Streak</th>
            </tr>
          </thead>
          <tbody>
            {matchupsData.matchups.map((juego, index) => (
              <tr key={index} className="hover:bg-gray-800">
                <td className="px-4 py-2">{juego.team}</td>
                <td className="px-4 py-2">{juego.starter}</td>
                <td className="px-4 py-2">{juego.margin?.toFixed(2)}</td>
                <td className="px-4 py-2">{(juego.team_power_pct * 100).toFixed(1)}%</td>
                <td className="px-4 py-2">{juego.proj_score?.toFixed(2)}</td>
                <td className="px-4 py-2">{juego.stats?.pitcher_win_pct ?? 'N/A'}</td>
                <td className="px-4 py-2">{juego.stats?.p_whip ?? 'N/A'}</td>
                <td className="px-4 py-2">{juego.stats?.era ?? 'N/A'}</td>
                <td className="px-4 py-2">{juego.stats?.lineup_factor ?? 'N/A'}</td>
                <td className="px-4 py-2">{juego.stats?.streak_10_days ?? 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
