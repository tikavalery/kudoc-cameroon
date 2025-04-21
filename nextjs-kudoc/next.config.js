/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // This enables static exports
	images: {
		unoptimized: true, // This is required for static exports when using next/image
		domains: ["raw.githubusercontent.com"], // Allow GitHub raw content for images
	},
	basePath: "/app1", // This will serve the app under /app1
};

module.exports = nextConfig;
