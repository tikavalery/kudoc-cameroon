import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<div className="footer">
			<div className="container p-sm-0">
				<div className="row justify-content-between">
					<div className="col-12 col-md-6 col-lg-4 col-xl-3">
						<a href="index.html">
							<Image
								className="img-fluid"
								src="./../assets/img/kudocLogo.png"
								alt="logo"
								width={300}
								height={50}
							/>
						</a>
						<p className="global__desc footer__desc">
							The Kumbo Development and Orientation Centre - abbreviated as
							KUDOC is a Cameroon based Non-Governmental Organization created in
							1999 by Dr. Banadzem Joseph Lukong. KUDOC is impacting the lives
							of over 1.5 million people..
						</p>
						<div className="footer__social">
							<ul className="footer__social-ul">
								<li>
									<a
										className="footer__social-link"
										href="https://m.facebook.com/groups/475983968115715/?ref=share&mibextid=NSMWBT"
									>
										<i className="fa-brands fa-facebook" />
									</a>
								</li>
								<li>
									<a
										className="footer__social-link"
										href="https://linkedin.com"
									>
										<i className="fa-brands fa-linkedin-in" />
									</a>
								</li>
								<li>
									<a
										className="footer__social-link"
										href="https://www.instagram.com"
									>
										<i className="fa-brands fa-instagram" />
									</a>
								</li>
								<li>
									<a className="footer__social-link" href="https://twitter.com">
										<i className="fa-brands fa-twitter" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 col-xl-2 d-md-flex justify-content-center my-5 my-md-0">
						<div className="">
							<h4 className="footer__sub">explore</h4>
							<ul className="footer__list">
								<li>
									<a className="footer__list-item" href="cases.html">
										{" "}
										Programs{" "}
									</a>
								</li>
								<li>
									<a className="footer__list-item" href="team.html">
										{" "}
										Staff{" "}
									</a>
								</li>
								<li>
									<a className="footer__list-item" href="guestbook.html">
										{" "}
										gallery{" "}
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4 col-xl-2 mb-5 mb-md-0 mt-md-5 mt-lg-0">
						<div className="">
							<h4 className="footer__sub">Donate</h4>
							<ul className="footer__list">
								<li>
									<a className="footer__list-item" href="donate.html">
										Give Donation
									</a>
								</li>
								<li>
									<a className="footer__list-item" href="volunteer.html">
										Become Volunteer
									</a>
								</li>
								<li>
									<Link className="footer__list-item" href="#">
										{" "}
										Child Sponsorship{" "}
									</Link>
								</li>
								<li>
									<a className="footer__list-item" href="donate.html">
										Other Ways to Give
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* <!-- HIDING THIS UNTIL WE KNOW WHAT WE WANT TO DISPLAY HERE. WE DO NOT HAVE A NEWS LETTER AS OF NOW --> */}
					<div className="col-12 col-md-6 col-xl-4 mt-md-5 mt-xl-0">
						<h4 className="footer__sub">Contact Us</h4>
						<div className="global__desc footer__desc location-wrapper">
							<i className="fa fa-2x fa-map-marker location-pin" />
							<div className="location-dex">
								<p>
									<strong>Head Office:</strong> Lyonga Street, Kumbo
								</p>
								<p>
									<strong>Bamenda Office:</strong> Short Tap, Mile 3 Nkwen
								</p>
							</div>
						</div>
						<div className="global__desc footer__desc phone-wrapper">
							<i className="fa fa-2x fa-phone phone-pin" />
							<div className="phone-desc">
								<a href="tel:(+237) 654 819 943"> (+237) 654 819 943</a>
							</div>
						</div>
						<div className="global__desc footer__desc contact-wrapper">
							{/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: <explanation> */}
							<i className="fa fa-2x fa-whatsapp" aria-hidden="true" />
							<div className="contact-desc">
								<a href="https://wa.me/237654819943">Whatsapp</a>
							</div>
						</div>
						<div className="global__desc footer__desc contact-wrapper">
							{/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: <explanation> */}
							<i className="fa fa-2x fa-envelope" aria-hidden="true" />
							<div className="contact-desc">
								<a href="mailto:kudocngo@kudoc.org">kudocngo@kudoc.org</a>
							</div>
						</div>
					</div>
				</div>
				<hr className="footer__border" />
				<div className="row">
					<div className="col-12 text-center">
						<p className="footer__bottom">
							Copyright © {new Date().getFullYear()} - KUMBO DEVELOPMENT AND
							ORIENTATION CENTRE . All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
