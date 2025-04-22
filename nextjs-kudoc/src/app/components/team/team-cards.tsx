import Image from "next/image";
import Link from "next/link";

// types/team.ts
export interface SocialLink {
	platform: string;
	/**@description The url to be used for the social link */
	url: string;
	/**@description The icon to be used for the social link */
	icon: string;
}

export interface TeamMember {
	id: number;
	name: string;
	position: string;
	image: string;
	socialLinks: SocialLink[];
}

interface SocialLinksProps {
	links: SocialLink[];
}

function SocialLinks({ links }: SocialLinksProps) {
	return (
		<ul className="">
			{links.map((link) => (
				<li key={link.url}>
					<Link
						className="team__card-head--link"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`${link.platform} profile`}
					>
						<i className={link.icon} />
					</Link>
				</li>
			))}
		</ul>
	);
}

function TeamCard({ name, position, image, socialLinks }: TeamMember) {
	return (
		<div className="team__card">
			<div className="team__card-head">
				<Image
					className="img-fluid"
					src={image}
					alt={`${name} - ${position}`}
					width={300}
					height={400}
				/>
				<div className="team__card-head--social">
					<SocialLinks links={socialLinks} />
				</div>
			</div>
			<div>
				<Link href="#" className="team__user">
					{name}
				</Link>
				<p className="team__cate">{position}</p>
			</div>
		</div>
	);
}

const teamMembers: TeamMember[] = [
	{
		id: 1,
		name: "BANADZEM Valery BERINYNY",
		position: "Honorary President",
		image: "/assets/img/kudoc11.jpg",
		socialLinks: [],
	},
	{
		id: 2,
		name: "TANGKA Eric DINDZE",
		position: "KUDOC Director",
		image: "/assets/img/kudoc12.jpg",
		socialLinks: [
			{
				platform: "Facebook",
				url: "https://www.facebook.com/tangka.eric.5",
				icon: "fa-brands fa-facebook",
			},
		],
	},
	{
		id: 3,
		name: "Vera LIFOTER",
		position: "Program Director",
		image: "/assets/img/kudoc131.jpg",
		socialLinks: [
			{
				platform: "Facebook",
				url: "https://www.facebook.com/vera.lifoter.9",
				icon: "fa-brands fa-facebook",
			},
		],
	},
	{
		id: 4,
		name: "Caroline BONGDU",
		position: "Assistant Program Director",
		image: "/assets/img/kudoc14.jpg",
		socialLinks: [],
	},
];

function Team() {
	return (
		<section className="team global__py" aria-label="Team Members">
			<div className="container p-sm-0">
				<div className="row">
					<div
						className="col-12 col-md-9 col-lg-6 text-center m-auto"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<h2 className="global__heading">Our team</h2>
					</div>
				</div>

				<div className="team__grid">
					{teamMembers.map((member) => (
						<TeamCard key={member.id} {...member} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Team;
