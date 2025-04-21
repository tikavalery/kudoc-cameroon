"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/utils/cn";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const isMobile = useIsMobile();
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white menu menu__scroll">
			<div className="container p-sm-0">
				<Link href="/" className="navbar-brand menu__logo p-0 m-0">
					<Image
						className="menu__logo-img"
						src="/assets/img/kudocLogo.png"
						alt="logo"
						width={415}
						height={70}
						priority
					/>
				</Link>
				<button
					className="navbar-toggler menu__toggle"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					aria-controls="navbarSupportedContent"
					aria-label="Toggle navigation"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-expanded={isOpen}
				>
					<i className="fa-solid fa-bars" />
				</button>
				<div
					className={cn("navbar-collapse", isOpen ? "show" : "collapse")}
					style={{
						visibility: isMobile ? (isOpen ? "visible" : "hidden") : "visible",
					}}
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav m-auto menu__list my-3 my-lg-0">
						<li className="nav-item">
							<Link
								href="/static-site/index.html"
								className="nav-link menu__list-link"
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/static-site/about.html"
								className="nav-link menu__list-link"
							>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/static-site/team.html"
								className="nav-link menu__list-link"
							>
								Staff
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/static-site/programs.html"
								className="nav-link menu__list-link"
							>
								Programs
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle menu__list-link"
								href="#"
								id="navbarDropdown"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Pages
							</Link>
							<ul
								className="dropdown-menu menu__list-dropdown--ul"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link
										href="/static-site/partners.html"
										className="dropdown-item"
									>
										Partners
									</Link>
								</li>
								<li>
									<Link
										href="/static-site/donate.html"
										className="dropdown-item"
									>
										Donate
									</Link>
								</li>
								<li>
									<Link
										href="/static-site/blog-details.html"
										className="dropdown-item"
									>
										Blog Details
									</Link>
								</li>
								<li>
									<Link
										href="/static-site/volunteer.html"
										className="dropdown-item"
									>
										Volunteer
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link
								href="/static-site/gallery.html"
								className="nav-link menu__list-link"
							>
								Gallery
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/static-site/contact.html"
								className="nav-link menu__list-link"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
