<tbody>
  {matchupsData.matchups.map((juego, index) => (
    <tr key={index} className="hover:bg-gray-800">
      <td className="px-4 py-2">{juego.team}</td>
      <td className="px-4 py-2">{juego.starter}</td>
      <td className="px-4 py-2">{juego.margin}</td>
      <td className="px-4 py-2">{(juego.team_power_pct * 100).toFixed(1)}%</td>
      <td className="px-4 py-2">{juego.proj_score?.toFixed(2)}</td>
      <td className="px-4 py-2">{juego.stats.pitcher_win_pct ?? 'N/A'}</td>
      <td className="px-4 py-2">{juego.stats.p_whip ?? 'N/A'}</td>
      <td className="px-4 py-2">{juego.stats.era ?? 'N/A'}</td>
      <td className="px-4 py-2">{juego.stats.lineup_factor ?? 'N/A'}</td>
      <td className="px-4 py-2">{juego.stats.streak_10_days ?? 'N/A'}</td>
    </tr>
  ))}
</tbody>
