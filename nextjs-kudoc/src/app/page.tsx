import "./components/cases/cases.css";

import Image from "next/image";
import Link from "next/link";
import About from "./components/about/aboutList";
import Cases from "./components/cases/cases";
import Organization from "./components/organization/organization-item";
import Service from "./components/service/service-card";
import Team from "./components/team/team-cards";

export default function Home() {
	return (
		<>
			<header className="hero">
				<div className="container p-sm-0">
					<div className="row align-items-center justify-content-between">
						<div className="col-12 col-md-7 col-lg-6">
							<h1 className="global__title global__title-dark">
								Kumbo Development and Orientation Centre - KUDOC
							</h1>
							<p className="global__desc">
								Creating self-awareness and empowering the underprivileged.
							</p>
							<p className="global__desc">AUTHORIZATION No: E26/Ps/118/208.</p>
							<Link href="/static-site/contact.html" className="global__btn">
								Donate
								<i className="fa-solid fa-arrow-up-long global__btn-arrow" />
							</Link>
						</div>
						<div className="col-12 col-md-5 p-0 text-end d-none d-md-block position-relative">
							<Image
								className="img-fluid"
								src="./assets/img/kudoc2.png"
								alt="KUDOC logo"
								width={415}
								height={300}
							/>
							<div className="hero__hand">
								<Image
									className="img-fluid"
									src="./assets/img/eric-volunteers.jpg"
									alt="Eric volunteers"
									width={235}
									height={205}
								/>
							</div>
						</div>
					</div>
				</div>
			</header>
			<Cases />
			<About />
			<Service />
			<Organization />
			<Team />
		</>
	);
}
