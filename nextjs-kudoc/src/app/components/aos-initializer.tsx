"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AosInitializer() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
			mirror: false,
		});
	}, []);

	return null;
}
