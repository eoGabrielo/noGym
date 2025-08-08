'use client'

import { useEffect, useState } from "react";

export default function PrincipalPage() {
    const [frases, setFrases] = useState<string[]>([]);
    const [fraseAtual, setFraseAtual] = useState<string>("");
    const [copiado, setCopiado] = useState<boolean>(false);

    useEffect(() => {
        async function fetchFrases() {
            const res = await fetch('/api/frases');
            const data = await res.json();
            setFrases(data.frases);
        }

        fetchFrases();
    }, []);

    const handleShowFrase = () => {
        const novaFrase = frases[Math.floor(Math.random() * frases.length)];
        setFraseAtual(novaFrase);
        setCopiado(false); // reseta estado do botão copiar
    };

    const handleCopiarFrase = async () => {
        if (!fraseAtual) return;
        try {
            await navigator.clipboard.writeText(fraseAtual);
            setCopiado(true);
        } catch (err) {
            alert("Erro ao copiar frase.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-900 to-red-950 p-8 text-red-200">
            <h1 className="text-4xl font-bold mb-12 text-center text-red-400 select-none">
                Frase do dia para não ir à academia hoje...
            </h1>

            <div className="mb-6 p-8 bg-red-900 rounded-xl shadow-lg text-red-300 text-center min-w-[320px] max-w-xl min-h-[140px] flex items-center justify-center text-2xl font-semibold transition-opacity duration-300">
                {fraseAtual || "Clique no botão para ver uma frase aleatória!"}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={handleShowFrase}
                    className="cursor-pointer px-10 py-3 bg-red-700 hover:bg-red-600 active:bg-red-800 rounded-full text-white text-xl font-semibold transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Mostrar frase
                </button>

                {fraseAtual && (
                    <button
                        onClick={handleCopiarFrase}
                        className={`cursor-pointer px-10 py-3 rounded-full text-white text-xl font-semibold transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 ${copiado
                                ? 'bg-red-950 hover:bg-red-900 focus:ring-red-900'
                                : 'bg-red-600 hover:bg-red-500 active:bg-red-700 focus:ring-red-400'
                            }`}
                    >
                        {copiado ? "Frase copiada!" : "Copiar frase"}
                    </button>
                )}
            </div>

            <footer className="mt-16 text-red-500 text-sm opacity-80 select-none">
                Sua desculpa oficial para hoje ©2025 Gabrielo.
            </footer>
        </div>
    );
}
