"use client";
import { useState } from "react";

export default function DailyForm() {
  const [treino, setTreino] = useState("");
  const [estudo, setEstudo] = useState("");
  const [energia, setEnergia] = useState(0);

  const checkEnergia = (value: number): number => {
    return Math.min(100, Math.max(0, value));
  };

  return (
    <form className="space-y-4 rounded-2xl border p-4 m-4">
      <div className="flex flex-col justify-center gap-5  ">
        <input
          className="w-full rounded border p-2"
          placeholder="Treino do dia"
          value={treino}
          onChange={(e) => setTreino(e.target.value)}
        />
        <input
          className="w-full rounded border p-2"
          placeholder="Estudo do dia"
          value={estudo}
          onChange={(e) => setEstudo(e.target.value)}
        />
        <div className="flex flex-col gap-0 text-center">
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            className={"w-full border p-2 accent-blue-600 fill-background"}
            value={energia}
            onChange={(e) => setEnergia(checkEnergia(Number(e.target.value)))}
          />
          <label>Energia {energia}%</label>
        </div>

        <button type="button" className="rounded bg-black px-4 py-2 text-white">
          Registrar
        </button>
      </div>
    </form>
  );
}
