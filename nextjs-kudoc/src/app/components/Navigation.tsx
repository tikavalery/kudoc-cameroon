"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white menu menu__scroll">
			<div className="container p-sm-0">
				<Link href="/" className="navbar-brand menu__logo p-0 m-0">
					<Image
						className="menu__logo-img"
						src="/assets/img/kudocLogo.png"
						alt="logo"
						width={150}
						height={50}
						priority
					/>
				</Link>
				<button
					className="navbar-toggler menu__toggle"
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					aria-controls="navbarSupportedContent"
					aria-expanded={isOpen}
					aria-label="Toggle navigation"
				>
					<i className="fa-solid fa-bars" />
				</button>
				<div className="navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav m-auto menu__list my-3 my-lg-0">
						<li className="nav-item">
							<Link href="/" className="nav-link menu__list-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about" className="nav-link menu__list-link">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/team" className="nav-link menu__list-link">
								Staff
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/cases" className="nav-link menu__list-link">
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
									<Link href="/partners" className="dropdown-item">
										Partners
									</Link>
								</li>
								<li>
									<Link href="/contact" className="dropdown-item">
										Donate
									</Link>
								</li>
								<li>
									<Link href="/cases" className="dropdown-item">
										Blog Details
									</Link>
								</li>
								<li>
									<Link href="/volunteer" className="dropdown-item">
										Volunteer
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<Link href="/gallery" className="nav-link menu__list-link">
								Gallery
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/contact" className="nav-link menu__list-link">
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
