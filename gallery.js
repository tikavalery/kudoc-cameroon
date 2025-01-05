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
// assets/img/gallery/
// get all images from the gallery folder
const galleryImagesPath = [
	"/assets/img/gallery/1.jpg",
	"/assets/img/gallery/2.jpg",
	"/assets/img/gallery/4.jpg",
	"/assets/img/gallery/5.jpg ",
	"/assets/img/gallery/6.jpg",
	"/assets/img/gallery/7.jpg ",
	"/assets/img/gallery/8.jpg",
	"/assets/img/gallery/9.jpg ",
	"/assets/img/gallery/10.jpg",
	"/assets/img/gallery/11.jpg ",
	"/assets/img/gallery/13.jpg ",
	"/assets/img/gallery/14.jpg",
	"/assets/img/gallery/15.jpg ",
	"/assets/img/gallery/16.jpg",
	"/assets/img/gallery/17.jpg ",
	"/assets/img/gallery/18.jpg",
	"/assets/img/gallery/19.jpg ",
	"/assets/img/gallery/20.jpg",
	"/assets/img/gallery/21.jpg ",
	"/assets/img/gallery/22.jpg",
	"/assets/img/gallery/23.jpg ",
	"/assets/img/gallery/24.jpg",
	"/assets/img/gallery/25.jpg ",
	"/assets/img/gallery/27.jpg ",
	"/assets/img/gallery/28.jpg",
	"/assets/img/gallery/29.jpg ",
	"/assets/img/gallery/30.jpg",
	"/assets/img/gallery/31.jpg ",
	"/assets/img/gallery/32.jpg",
	"/assets/img/gallery/33.jpg ",
	"/assets/img/gallery/34.jpg",
	"/assets/img/gallery/35.jpg ",
	"/assets/img/gallery/26.jpg",
	"/assets/img/gallery/37.jpg ",
	"/assets/img/gallery/36.jpg",
	"/assets/img/gallery/38.jpg",
	"/assets/img/gallery/3.jpg",
	"/assets/img/gallery/12.jpg",
];
galleryImagesPath.forEach((image, idx) => {
	const galleryBodyLayer = createGalleryBodyLayer(image, idx);
	galleryBody.appendChild(galleryBodyLayer);
});
