/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/dynamic-site",
	trailingSlash: true, // This might help with static exports
	images: {
		unoptimized: true,
		domains: ["raw.githubusercontent.com"],
	},
};

module.exports = nextConfig;
