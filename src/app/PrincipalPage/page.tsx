'use client'

import { useEffect, useState } from "react";

export default function PrincipalPage() {

    const [frases, setFrases] = useState<string[]>([]);
    const [fraseAtual, setFraseAtual] = useState<string>("");
    
    useEffect(() => {
        async function fetchFrases() {
            const res = await fetch('/api/frases');
            const data = await res.json();
            setFrases(data.frases);
        };

        fetchFrases();
    }, []);

    const handleShowFrase = () => {
        setFraseAtual(frases[Math.floor(Math.random() * frases.length)]);
        setTimeout(() => {
            setFraseAtual("Clique novamente e veja uma nova frase.");
        }, 20000);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-900 to-red-950 p-8 text-red-200">
            <h1 className="text-4xl font-bold mb-12 text-center text-red-400 select-none">
                Frase do dia para não ir à academia hoje...
            </h1>

            <div
                className="mb-10 p-8 bg-red-900 rounded-xl shadow-lg text-red-300 text-center min-w-[320px] max-w-xl min-h-[140px] flex items-center justify-center text-2xl font-semibold transition-opacity duration-300"
            >
                {fraseAtual || "Clique no botão para ver uma frase aleatória!"}
            </div>

            <button
                onClick={handleShowFrase}
                className="cursor-pointer px-10 py-3 bg-red-700 hover:bg-red-600 active:bg-red-800 rounded-full text-white text-xl font-semibold transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                Mostrar frase
            </button>

            <footer className="mt-16 text-red-500 text-sm opacity-80 select-none">
                Sua desculpa oficial para hoje ©2025 Gabrielo.
            </footer>
        </div>
    );
}
