// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desculpas para não ir à academia",
  description: "Veja uma desculpa aleatória (e engraçada) para faltar à academia hoje!",

  openGraph: {
    title: "Desculpas para não ir à academia",
    description: "Clique e descubra sua desculpa oficial para hoje 😅",
    url: "https://no-gym.vercel.app",
    siteName: "Desculpas Gym",
    images: [
      {
        url: "/pre.png",
        width: 1200,
        height: 630,
        alt: "Prévia do site com desculpa engraçada",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Desculpas para não ir à academia",
    description: "Clique e descubra sua desculpa oficial para hoje 😅",
    images: ["/pre.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
