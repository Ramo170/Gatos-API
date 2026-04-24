"use client";
import { useState } from "react";

export default function Home() {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(false);

  async function buscarGatos() {
    setLoading(true);

    const responce = await fetch("https://api.thecatapi.com/v1/images/search");

    const data = await responce.json();

    console.log(data);

    setCat(data[0].url);

    setLoading(false);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <h1 className="text-3xl font-bold mb-6">Api Gatos</h1>
      <button
        onClick={buscarGatos}
        disabled={loading}
        className="bg-blue-500 text-white px-6 rounded hover:bg-blue-300 transition"
      >
        {loading ? "Buscando..." : "Buscar Gatos"}
      </button>
      {cat && (
        <img
          src={cat}
          width={300}
          height={300}
          className="mt-6 w-80 rounded-xl shadow-lg"
        />
      )}
    </main>
  );
}
