import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
	icon: string;
	title: string;
	email: string;
	animationDirection: "left" | "right";
}

const ServiceCard = ({
	icon,
	title,
	email,
	animationDirection,
}: ServiceCardProps) => {
	return (
		<div
			className="service__card service__card-linear"
			data-aos={`fade-${animationDirection}`}
			data-aos-duration="1000"
		>
			<div className="global__icon service__card-icon">
				<Image src={icon} alt={`${title} icon`} width={32} height={32} />
			</div>
			<div>
				<Link href={`mailto:${email}`} className="volunteer-href">
					<h3 className="service__card-heading global__heading">{title}</h3>
				</Link>
			</div>
		</div>
	);
};

const Service = () => {
	const email = "kudocngo@kudoc.org";

	const services = [
		{
			icon: "/assets/img/donation.svg",
			title: "Give Donation",
			animationDirection: "left" as const,
		},
		{
			icon: "/assets/img/hands-2.svg",
			title: "Become Volunteer",
			animationDirection: "right" as const,
		},
	];

	return (
		<div className="service global__py pt-0">
			<div className="container p-sm-0">
				<div className="row">
					<div
						className="col-12 col-md-9 col-lg-6 text-center m-auto service__m !mb-11"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<h2 className="global__heading m-0">About Us</h2>
						<p className="about__desc global__desc mt-3 mb-0 text-center text-sm font-light">
							The Kumbo Development and Orientation Centre - abbreviated as
							KUDOC is a Cameroon based Non-Governmental Organization created in
							1999 by Dr. Banadzem Joseph Lukong. KUDOC is impacting the lives
							of over 1.5 million people.
						</p>
					</div>
				</div>
				<div className="row">
					{services.map((service, index) => (
						<div
							key={service.title}
							className={`col-md-6 ${index === 0 ? "pe-md-4" : "ps-md-4"}`}
						>
							<ServiceCard {...service} email={email} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
