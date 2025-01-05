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
	"https://utfs.io/f/72Yd3kHQqcoxEpKLEUi0rIOTQCwzM5nSqpRuNagYhGHojB40",
	"https://utfs.io/f/72Yd3kHQqcoxvpoqGl9QZ5RXmituFyY1qE8zGNa7B9cLUTSn",
	"https://utfs.io/f/72Yd3kHQqcoxq6mXfTzQce3MuZ1w4KUzdr2DGjhJbRFkCWi8",
	"https://utfs.io/f/72Yd3kHQqcoxZz8dLoaAhprtqWwQme6PRb4ESDycXJfOl3zv",
	"https://utfs.io/f/72Yd3kHQqcoxuhrChpjeFyzALUiT6djpsxDHEkO9J2B018Gm",
	"https://utfs.io/f/72Yd3kHQqcoxaxi82JBAp7RCYNxAkBVXeHjQEgIZOD9zfGrn",
	"https://utfs.io/f/72Yd3kHQqcoxEXfVj90rIOTQCwzM5nSqpRuNagYhGHojB40P",
	"https://utfs.io/f/72Yd3kHQqcoxqCI0ooyzQce3MuZ1w4KUzdr2DGjhJbRFkCWi",
	"https://utfs.io/f/72Yd3kHQqcoxu6yYLYjeFyzALUiT6djpsxDHEkO9J2B018Gm",
	"https://utfs.io/f/72Yd3kHQqcoxLH79zDFGnrg29cOGLeKdIC1ufs0Yv4bxlwWU",
	"https://utfs.io/f/72Yd3kHQqcoxXBpF96NnkPyZ6IwLqoWs5crjQzfA38CuBgJV",
	"https://utfs.io/f/72Yd3kHQqcoxSwmJYdMn2UMmAsVW1qCwZi56DvxHKut84R0c",
	"https://utfs.io/f/72Yd3kHQqcoxXzWlodNnkPyZ6IwLqoWs5crjQzfA38CuBgJV",
	"https://utfs.io/f/72Yd3kHQqcoxQasCuwFdOpMH9EjJoTgDBvPkwxRuh7n5INW8",
	"https://utfs.io/f/72Yd3kHQqcoxLy5yUoGnrg29cOGLeKdIC1ufs0Yv4bxlwWUM",
	"https://utfs.io/f/72Yd3kHQqcoxu5D9wUjeFyzALUiT6djpsxDHEkO9J2B018Gm",
	"https://utfs.io/f/72Yd3kHQqcoxL41zd5Gnrg29cOGLeKdIC1ufs0Yv4bxlwWUM",
	"https://utfs.io/f/72Yd3kHQqcoxrDGBfk3WJgfiCIM43qVZvsRAjESDNy218HQz",
	"https://utfs.io/f/72Yd3kHQqcox67R7s68cTn0uEIr4hLxYFpOjgz1DBPRwv6Ve",
	"https://utfs.io/f/72Yd3kHQqcox3nSDav7qDlOwzohTaB8HEZS70cLMpxvRYf21",
	"https://utfs.io/f/72Yd3kHQqcoxQpk6lIFdOpMH9EjJoTgDBvPkwxRuh7n5INW8",
	"https://utfs.io/f/72Yd3kHQqcoxZ1mO5uaAhprtqWwQme6PRb4ESDycXJfOl3zv",
	"https://utfs.io/f/72Yd3kHQqcox6YePXd8cTn0uEIr4hLxYFpOjgz1DBPRwv6Ve",
	"https://utfs.io/f/72Yd3kHQqcox96OaQiy5nJHEpwGBK7ALqRXd2fNcIWiY1UyF",
	"https://utfs.io/f/72Yd3kHQqcoxx6NcGpXhOzjYQMnm0r24Vlk8HtRPU1fDpAyK",
	"https://utfs.io/f/72Yd3kHQqcoxuPCaGxjeFyzALUiT6djpsxDHEkO9J2B018Gm",
	"https://utfs.io/f/72Yd3kHQqcox72KPjzzQqcoxC8tUZgOjdXkypBEuJwHh0eVl",
	"https://utfs.io/f/72Yd3kHQqcoxvopw6B9QZ5RXmituFyY1qE8zGNa7B9cLUTSn",
	"https://utfs.io/f/72Yd3kHQqcoxdBbqAOd6KLWk5xp2l0UVvq8znC7wohZiF3et",
	"https://utfs.io/f/72Yd3kHQqcoxukNFeljeFyzALUiT6djpsxDHEkO9J2B018Gm",
	"https://utfs.io/f/72Yd3kHQqcox0ONHQPYt3hjILBR6oQHpbfvUAwXuMx1cWFCa",
	"https://utfs.io/f/72Yd3kHQqcoxAXGhceuwaJRuG2PsTUoEM7pvwOmqVZB0dfWl",
	"https://utfs.io/f/72Yd3kHQqcoxvCF6M9QZ5RXmituFyY1qE8zGNa7B9cLUTSnp",
	"https://utfs.io/f/72Yd3kHQqcox2YOzSBkERrCo6g4xKDaLvzWGOuQmMlTUw5sE",
	"https://utfs.io/f/72Yd3kHQqcoxHmjU2dRurGzpejofy20QZ5sE4tVNRSXmw6kM",
	"https://utfs.io/f/72Yd3kHQqcoxmEfCTTrjRInwSZrYoPgBe6DFCfEzi3lU5byN",
	"https://utfs.io/f/72Yd3kHQqcoxQUvLL0FdOpMH9EjJoTgDBvPkwxRuh7n5INW8",
];

imageURLS.forEach((image, idx) => {
	const galleryBodyLayer = createGalleryBodyLayer(image, idx);
	galleryBody.appendChild(galleryBodyLayer);
});
