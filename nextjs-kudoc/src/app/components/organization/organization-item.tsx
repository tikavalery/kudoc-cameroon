// components/Organization/OrganizationItem.tsx
import Image from "next/image";

export interface OrganizationItemData {
	icon: string;
	title: string;
	description: string;
}

interface OrganizationItemProps {
	icon: string;
	title: string;
	description: string;
}

const OrganizationItem = ({
	icon,
	title,
	description,
}: OrganizationItemProps) => {
	return (
		<li className="org__li">
			<div className="org__li-img">
				<Image
					className="org__li-img--icon"
					src={icon}
					alt={`${title} icon`}
					width={32}
					height={32}
				/>
			</div>
			<div>
				<h3 className="org__li-name">{title}</h3>
				<p className="org__desc global__desc mt-2 mb-0">{description}</p>
			</div>
		</li>
	);
};

const Organization = () => {
	const organizationItems = [
		{
			icon: "/assets/img/campain.svg",
			title: "Empowering the underprivileged",
			description:
				"Track how many people signed the petition by week, month, year.",
		},
		{
			icon: "/assets/img/donation.svg",
			title: "Women Empowerment",
			description: "Empowering rural women is a prime objective of KUDOC.",
		},
	];

	return (
		<section
			className="org global__py pt-0 pb-[140px]"
			aria-label="Organization Mission"
		>
			<div className="container p-sm-0">
				<div className="row">
					<div
						className="col-12 col-md-9 col-lg-7 text-center m-auto service__m !mb-12"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<h2 className="global__heading m-0">
							The mission of our organization.
						</h2>
						<p className="org__desc global__desc mt-3 mb-0">
							Creating self-awareness and empowering the underprivileged.
						</p>
					</div>
				</div>
				<div className="row align-items-xl-center">
					<div
						className="col-lg-6"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<ul>
							{organizationItems.map((item) => (
								<OrganizationItem key={item.title} {...item} />
							))}
						</ul>
					</div>
					<div
						className="col-lg-6 d-none d-sm-block mt-5 mt-lg-0"
						data-aos="fade-right"
						data-aos-duration="1000"
					>
						<Image
							className="img-fluid"
							src="/assets/img/kudoc10.png"
							alt="KUDOC organization image"
							width={600}
							height={400}
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Organization;
