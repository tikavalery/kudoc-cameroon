import "./globals.css";
import "./index.css";
import "./style.css";
import "./styles/menu.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "./components/footer";
import Navigation from "./components/header";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Kudoc Cameroon",
	description: "Kudoc Cameroon - Making a difference in communities",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				{/* Add Bootstrap CSS */}
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
				/>
				{/* Add Font Awesome */}
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<Navigation />
				<main className="mt-5 pt-4">{children}</main>
				<Footer />
				{/* Add Bootstrap JS */}
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
