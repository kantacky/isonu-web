import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "!'s on U",
    description: "Eyes on you",
    itunes: {
        appId: '6469441884',
        appArgument: 'https://isonu.kantacky.com/',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={noto.className}>{children}</body>
        </html>
    );
}
