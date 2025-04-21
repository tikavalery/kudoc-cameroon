import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export", // This enables static exports
	images: {
		unoptimized: true, // This is required for static exports when using next/image
		domains: ["raw.githubusercontent.com"], // Allow GitHub raw content for images
	},
	basePath: "/dynamic-site", // This will serve the app under /dynamic-site
};

export default nextConfig;
