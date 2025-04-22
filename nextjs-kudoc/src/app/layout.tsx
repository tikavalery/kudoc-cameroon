import "aos/dist/aos.css";
import "./globals.css";
import "./index.css";
import "./style.css";
import "./styles/menu.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import AosInitializer from "./components/aos-initializer";
import { Footer } from "./components/footer";
import Navigation from "./components/header";

// Initialize the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "KUDOC - Kumbo Development and Orientation Center",
	description: "Creating self-awareness and empowering the underprivileged.",
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
				<AosInitializer />
				<Navigation />
				{children}
				<Footer />
				{/* Add Bootstrap JS */}
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
					strategy="afterInteractive"
				/>
				<Script
					src="/assets/js/jquery-1.12.4.min.js"
					strategy="afterInteractive"
				/>
				<Script src="/assets/js/venobox.min.js" strategy="afterInteractive" />
				<Script src="/assets/js/waypoints.min.js" strategy="afterInteractive" />
				<Script
					src="/assets/js/jquery.counterup.min.js"
					strategy="afterInteractive"
				/>
				<Script src="/assets/js/slick.min.js" strategy="afterInteractive" />

				<Script
					src="/assets/js/bootstrap.bundle.min.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
