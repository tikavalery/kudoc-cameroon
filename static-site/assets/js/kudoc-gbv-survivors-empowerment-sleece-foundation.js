const galleryBody = document.getElementById("gallery-body");

function createGalleryBodyLayer(image, idx) {
	const galleryBodyLayer = document.createElement("a");
	galleryBodyLayer.classList.add("gallery__body-layer");
	galleryBodyLayer.setAttribute("data-gall", `gallery_${idx}`);
	galleryBodyLayer.setAttribute("href", image);
	galleryBodyLayer.setAttribute("width", "400");
	galleryBodyLayer.setAttribute("height", "400");

	const img = document.createElement("img");
	img.classList.add("img-fluid");
	img.setAttribute("src", image);
	img.setAttribute("alt", "image");
	img.setAttribute("width", "400");
	img.setAttribute("height", "400");

	galleryBodyLayer.appendChild(img);
	return galleryBodyLayer;
}
/**
 * Images are hosted on uploadthing.com
 */
const imageURLS = [
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.07%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.59.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.00%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.00.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.01%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.01.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.02%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.02.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.03%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.03.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.04%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.04.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.05%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.05.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.06.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.21.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.22.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.56.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.57%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.57.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.47.59.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.00.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.01.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.23%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.23.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.46.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.47%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.48.47.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28%20(2).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.29%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.29.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.30.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.31.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.27.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.49.28%20(1).jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.07.jpeg",
	"https://raw.githubusercontent.com/tikavalery/kudoc-cameroon/refs/heads/main/static-site/assets/KUDOC%20-%20GBV%20Survivors%20Empowerment%20-%20Sleece%20Foundation/Photos/WhatsApp%20Image%202025-04-17%20at%2009.46.08.jpeg",
];

imageURLS.forEach((image, idx) => {
	const galleryBodyLayer = createGalleryBodyLayer(image, idx);
	galleryBody.appendChild(galleryBodyLayer);
});
