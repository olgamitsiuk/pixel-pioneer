import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { AuthProvider } from './context/AuthContext';
import { BasketContextProvider } from './context/BasketContext';

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<AuthProvider>
					<BasketContextProvider>
						<div className="flex flex-col min-h-screen">
							<div className="w-full">
								<Header />
							</div>
							<main className="flex-grow mb-4 w-full px-4 sm:px-6 lg:px-8 2xl:max-w-[1600px] 2xl:mx-auto">
								{children}
							</main>
							<div className="w-full">
								<Footer />
							</div>
						</div>
					</BasketContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}