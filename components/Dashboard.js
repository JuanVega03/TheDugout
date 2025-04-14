"use client";

import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    fetch("/pivots_data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.picks || []);
        setFecha(json.fecha || "");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        🔥 Picks para: {fecha}
      </h1>

      {data.length === 0 ? (
        <p className="text-gray-600">Cargando datos o no hay picks disponibles.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((pick, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border p-4 space-y-2 hover:scale-[1.01] transition"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">
                  {pick.team} vs {pick.opponent}
                </h2>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    pick.result === "Win"
                      ? "bg-green-100 text-green-700"
                      : pick.result === "Loss"
                      ? "bg-red-100 text-red-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {pick.result || "TBD"}
                </span>
              </div>

              <p className="text-sm text-gray-600">
                <strong>Pitcher:</strong> {pick.pitcher}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Line:</strong> {pick.line}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Projected Runs:</strong> {parseFloat(pick.projected_runs).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Power:</strong> {(parseFloat(pick.team_power_pct) * 100).toFixed(1)}%
              </p>
              <p className="text-sm text-gray-600">
                <strong>Margin:</strong> {(parseFloat(pick.margin_pct) * 100).toFixed(1)}%
              </p>
              <p className="text-sm font-semibold text-blue-700">
                <strong>Sharpness:</strong> {parseFloat(pick.sharpness).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
