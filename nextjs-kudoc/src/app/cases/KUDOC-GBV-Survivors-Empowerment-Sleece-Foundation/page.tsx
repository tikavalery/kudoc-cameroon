import Link from "next/link";

const links = [
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.07%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.59.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.00%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.00.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.01%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.01.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.02%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.02.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.03%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.03.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.04%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.04.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.05%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.05.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.06.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.21.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.22.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.56.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.57%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.57.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.59.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.00.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.01.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.23%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.23.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.46.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.47%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.47.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28%20(2).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.29%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.29.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.30.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.31.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.27.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.07.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.08.jpeg",
];

function ImageCard({ src, alt }: { src: string; alt: string }) {
	return (
		<Link
			className="gallery__body-layer vbox-item"
			data-gall="gallery_0"
			href={src}
		>
			<img className="img-fluid" src={src} alt={alt} width={400} height={400} />
		</Link>
	);
}

export default function KUDOCGBVSurvivorsEmpowermentSleeceFoundation() {
	return (
		<div className="container">
			<div className="row">
				<div className="gallery__body" id="gallery-body">
					{links.map((link) => (
						<ImageCard
							key={link}
							src={link}
							alt="KUDOC GBV Survivors Empowerment Sleece Foundation"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
