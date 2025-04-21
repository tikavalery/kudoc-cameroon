const socialLinks = [
	{
		href: "https://m.facebook.com/groups/475983968115715/?ref=share&mibextid=NSMWBT",
		icon: "fa-brands fa-facebook",
	},
	{ href: "https://linkedin.com", icon: "fa-brands fa-linkedin-in" },
	{ href: "https://www.instagram.com", icon: "fa-brands fa-instagram" },
	{ href: "https://twitter.com", icon: "fa-brands fa-twitter" },
];

const exploreLinks = [
	{ href: "about.html", text: "About Us" },
	{ href: "cases.html", text: "Programs" },
	{ href: "team.html", text: "Staff" },
	{ href: "gallery.html", text: "gallery" },
];

const donateLinks = [
	{ href: "contact.html", text: "Give Donation" },
	{ href: "volunteer.html", text: "Become Volunteer" },
	{ href: "#", text: "Child Sponsorship" },
	{ href: "contact.html", text: "Other Ways to Give" },
];

const phoneLinks = [
	{ href: "tel:(+237) 654 819 943", text: "(+237) 654 819 943" },
	{ href: "tel:(+237) 654 819 943", text: "(+237) 654 819 943" },
];

/**
 * @description Create the footer border
 * @returns {HTMLElement}
 */
function createFooterBorder() {
	const footerBorder = document.createElement("hr");
	footerBorder.className = "footer__border";
	return footerBorder;
}

/**
 * @description Create the copyright row
 * @returns {HTMLElement}
 */
function createCopyrightRow() {
	const copyrightRow = document.createElement("div");
	copyrightRow.className = "row";

	const colCopyright = document.createElement("div");
	colCopyright.className = "col-12 text-center";

	const copyrightText = document.createElement("p");
	copyrightText.className = "footer__bottom";
	copyrightText.innerHTML = `Copyright © <span id="year"></span> - KUMBO DEVELOPMENT AND ORIENTATION CENTRE . All Rights Reserved.`;
	colCopyright.appendChild(copyrightText);

	copyrightRow.appendChild(colCopyright);

	return copyrightRow;
}

/**
 * @description Create the description and social column
 * @returns {HTMLElement}
 */
function createDescriptionAndSocialColumn() {
	const descriptionAndSocialColumn = document.createElement("div");
	descriptionAndSocialColumn.className = "col-12 col-md-6 col-lg-4 col-xl-3";

	const logoLink = document.createElement("a");
	logoLink.href = "index.html";

	const logoImg = document.createElement("img");
	logoImg.className = "img-fluid";
	logoImg.src = "./assets/img/kudocLogo.png";
	logoImg.alt = "logo";

	logoLink.appendChild(logoImg);
	descriptionAndSocialColumn.appendChild(logoLink);

	const desc = document.createElement("p");
	desc.className = "global__desc footer__desc";
	desc.textContent =
		"The Kumbo Development and Orientation Centre - abbreviated as KUDOC is a Cameroon based Non-Governmental Organization created in 1999 by Dr. Banadzem Joseph Lukong. KUDOC is impacting the lives of over 1.5 million people..";
	descriptionAndSocialColumn.appendChild(desc);

	const socialDiv = document.createElement("div");
	socialDiv.className = "footer__social";

	const socialUl = document.createElement("ul");
	socialUl.className = "footer__social-ul";

	socialLinks.forEach((link) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.className = "footer__social-link";
		a.href = link.href;

		const icon = document.createElement("i");
		icon.className = link.icon;

		a.appendChild(icon);
		li.appendChild(a);
		socialUl.appendChild(li);
	});

	// Append the socialUl to the socialDiv
	socialDiv.appendChild(socialUl);

	// Append the socialDiv to the descriptionAndSocialColumn
	descriptionAndSocialColumn.appendChild(socialDiv);

	return descriptionAndSocialColumn;
}

/**
 * @description Create the explore column
 * @returns {HTMLElement}
 */
function createExploreColumn() {
	// Column 2: Explore Links
	const exploreColumn = document.createElement("div");
	exploreColumn.className =
		"col-12 col-md-6 col-lg-4 col-xl-2 d-md-flex justify-content-center my-5 my-md-0";

	const exploreDiv = document.createElement("div");

	const exploreTitle = document.createElement("h4");
	exploreTitle.className = "footer__sub";
	exploreTitle.textContent = "explore";

	exploreDiv.appendChild(exploreTitle);

	const exploreUl = document.createElement("ul");
	exploreUl.className = "footer__list";

	exploreLinks.forEach((link) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.className = "footer__list-item";
		a.href = link.href;
		a.textContent = link.text;
		li.appendChild(a);
		exploreUl.appendChild(li);
	});

	exploreDiv.appendChild(exploreUl);
	exploreColumn.appendChild(exploreDiv);

	return exploreColumn;
}

/**
 * @description Create the donate column
 * @returns {HTMLElement}
 */
function createDonateColumn() {
	const donateColumn = document.createElement("div");
	donateColumn.className = "col-12 col-md-6 col-lg-4 col-xl-2 mb-5 mb-md-0 mt-md-5 mt-lg-0";

	const donateDiv = document.createElement("div");
	const donateTitle = document.createElement("h4");
	donateTitle.className = "footer__sub";
	donateTitle.textContent = "Donate";
	donateDiv.appendChild(donateTitle);

	const donateUl = document.createElement("ul");
	donateUl.className = "footer__list";

	donateLinks.forEach((link) => {
		const li = document.createElement("li");
		const a = document.createElement("a");
		a.className = "footer__list-item";
		a.href = link.href;
		a.textContent = link.text;
		li.appendChild(a);
		donateUl.appendChild(li);
	});

	donateDiv.appendChild(donateUl);
	donateColumn.appendChild(donateDiv);

	return donateColumn;
}

/**
 * @description Create the phone wrapper
 * @returns {HTMLElement}
 */
function createPhoneWrapper() {
	const phoneWrapper = document.createElement("div");
	phoneWrapper.className = "global__desc footer__desc phone-wrapper";

	const phonePin = document.createElement("i");
	phonePin.className = "fa fa-2x fa-phone phone-pin";
	phonePin.setAttribute("aria-hidden", "true");
	phoneWrapper.appendChild(phonePin);

	const phoneDesc = document.createElement("div");
	phoneDesc.className = "phone-desc";

	phoneLinks.forEach((link) => {
		const a = document.createElement("a");
		a.href = link.href;
		a.textContent = link.text;
		phoneDesc.appendChild(a);
	});

	phoneWrapper.appendChild(phoneDesc);

	return phoneWrapper;
}

/**
 * @description Create the whatsapp wrapper
 * @returns {HTMLElement}
 */
function createWhatsappWrapper() {
	const whatsappWrapper = document.createElement("div");
	whatsappWrapper.className = "global__desc footer__desc contact-wrapper";

	const whatsappIcon = document.createElement("i");
	whatsappIcon.className = "fa fa-2x fa-whatsapp";
	whatsappIcon.setAttribute("aria-hidden", "true");
	whatsappWrapper.appendChild(whatsappIcon);

	const whatsappDesc = document.createElement("div");
	whatsappDesc.className = "contact-desc";

	const whatsappLink = document.createElement("a");
	whatsappLink.href = "https://wa.me/237654819943";
	whatsappLink.textContent = "Whatsapp";
	whatsappDesc.appendChild(whatsappLink);

	whatsappWrapper.appendChild(whatsappDesc);

	return whatsappWrapper;
}

/**
 * @description Create the email list item
 * @returns {HTMLElement}
 */
function createEmailWrapper() {
	const emailWrapper = document.createElement("div");
	emailWrapper.className = "global__desc footer__desc contact-wrapper";

	const emailIcon = document.createElement("i");
	emailIcon.className = "fa fa-2x fa-envelope";
	emailIcon.setAttribute("aria-hidden", "true");
	emailWrapper.appendChild(emailIcon);

	const emailDesc = document.createElement("div");
	emailDesc.className = "contact-desc";

	const emailLink = document.createElement("a");
	emailLink.href = "mailto:kudocngo@kudoc.org";
	emailLink.textContent = "kudocngo@kudoc.org";
	emailDesc.appendChild(emailLink);

	emailWrapper.appendChild(emailDesc);

	return emailWrapper;
}

/**
 * @description Create the location wrapper
 * @returns {HTMLElement}
 */
function createLocationWrapper() {
	const locationWrapper = document.createElement("div");
	locationWrapper.className = "global__desc footer__desc location-wrapper";

	const locationPin = document.createElement("i");
	locationPin.className = "fa fa-2x fa-map-marker location-pin";
	locationPin.setAttribute("aria-hidden", "true");
	locationWrapper.appendChild(locationPin);

	const locationDesc = document.createElement("div");
	locationDesc.className = "location-dex";

	const headOffice = document.createElement("p");
	headOffice.innerHTML = "<strong>Head Office:</strong> Lyonga Street, Kumbo";
	locationDesc.appendChild(headOffice);

	const bamendaOffice = document.createElement("p");
	bamendaOffice.innerHTML = "<strong>Bamenda Office:</strong> Short Tap, Mile 3 Nkwen";
	locationDesc.appendChild(bamendaOffice);

	locationWrapper.appendChild(locationDesc);

	return locationWrapper;
}

/**
 * @description Create the contact column
 * @returns {HTMLElement}
 */
function createContactColumn() {
	const contactColumn = document.createElement("div");
	contactColumn.className = "col-12 col-md-6 col-xl-4 mt-md-5 mt-xl-0";

	const contactTitle = document.createElement("h4");
	contactTitle.className = "footer__sub";
	contactTitle.textContent = "Contact Us";
	contactColumn.appendChild(contactTitle);

	const locationWrapper = createLocationWrapper();
	contactColumn.appendChild(locationWrapper);

	const phoneWrapper = createPhoneWrapper();
	contactColumn.appendChild(phoneWrapper);

	const whatsappWrapper = createWhatsappWrapper();
	contactColumn.appendChild(whatsappWrapper);

	const emailWrapper = createEmailWrapper();
	contactColumn.appendChild(emailWrapper);

	return contactColumn;
}

/**
 * @description Create the footer
 * @returns {HTMLElement}
 */
function createFooter() {
	const footer = document.getElementById("footer-id");
	if (!footer) {
		console.error("Footer element with id 'footer-id' not found");
		return;
	}
	// Create the main container
	const container = document.createElement("div");
	container.className = "container p-sm-0";

	// Create the first row
	const firstRow = document.createElement("div");
	firstRow.className = "row justify-content-between";

	// Column 1: Logo, Description, and Social Links
	const descriptionAndSocialColumn = createDescriptionAndSocialColumn();
	firstRow.appendChild(descriptionAndSocialColumn);

	// Column 2: Explore Links
	const exploreColumn = createExploreColumn();
	firstRow.appendChild(exploreColumn);

	// Column 3: Donate Links
	const donateColumn = createDonateColumn();
	firstRow.appendChild(donateColumn);

	// Column 4: Contact Information
	const contactColumn = createContactColumn();
	firstRow.appendChild(contactColumn);

	container.appendChild(firstRow);

	// Footer Border
	const footerBorder = createFooterBorder();
	container.appendChild(footerBorder);

	// Second Row: Copyright
	const copyrightRow = createCopyrightRow();
	container.appendChild(copyrightRow);

	// Append the container to the footer
	footer.appendChild(container);

	// Set the current year in the copyright
	const yearSpan = document.getElementById("year");
	yearSpan.textContent = new Date().getFullYear();
}

// Call the function to create and append the footer
createFooter();
