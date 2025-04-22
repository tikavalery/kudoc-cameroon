import Image from "next/image";
import Link from "next/link";

interface CaseCardProps {
	image: string;
	tag: string;
	location: string;
	title: string;
	description: string;
	progress: number;
}

const CaseCard = ({
	image,
	tag,
	location,
	title,
	description,
	progress,
}: CaseCardProps) => {
	return (
		<div className="card cases__card">
			<div className="cases__card-img">
				<Link href="#">
					<Image
						className="img-fluid w-100"
						src={image}
						alt="case image"
						width={400}
						height={300}
					/>
				</Link>
				<h4 className="cases__card-tag">{tag}</h4>
			</div>
			<div className="card-body px-4">
				<div className="d-flex">
					<Image
						className="cases__card-i"
						src="/assets/img/location.svg"
						alt="location icon"
						width={16}
						height={16}
					/>
					{location ? (
						<span className="cases__card-location ps-1">{location}</span>
					) : null}
				</div>
				<div>
					<Link href="#" className="cases__card-title">
						{title}
					</Link>
				</div>
				<div className="cases__card-range">
					<p className="global__desc m-0">{description}</p>
					<div className="progress cases__card-progress">
						<div
							className="progress-bar cases__card-progress--bar"
							role="progressbar"
							style={{ width: `${progress}%` }}
							aria-valuenow={progress}
							aria-valuemin={0}
							aria-valuemax={100}
							tabIndex={0}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

const Cases = () => {
	const casesData = [
		{
			image: "/assets/img/kudoc3.jpg",
			tag: "Childrens health",
			location: "Cameroon",
			title: "Extensive Promotion of Healthcare",
			description:
				"KUDOC'S comprehensive and community-centric health program takes primary healthcare services to the doorsteps of underserved communities in both rural and urban Cameroon.",
			progress: 40,
		},
		{
			image: "/assets/img/kuduc4.jpg",
			tag: "Agriculture",
			location: "Cameroon",
			title: "Boosting agriculture in rural areas",
			description:
				"Our multi-stakeholder Agriculture approach seeks to empower smallholder farmers to put them at the center of policies for efficient farming and farm management, food security and secure livelihoods.",
			progress: 30,
		},
		{
			image: "/assets/img/kudoc5.jpg",
			tag: "Child Protection and Development",
			location: "Cameroon",
			title: "Child protection and development",
			description:
				"We have a variety of projects that we have executed in Child Protection. We aim to increase community education and awareness about child abuse, including strategies for prevention, intervention and treatment.",
			progress: 50,
		},
	];

	return (
		<div className="cases global__py pb-5">
			<div className="container p-sm-0">
				<div className="row">
					<div
						className="col-12 col-md-9 col-lg-6 text-center m-auto"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<h3 className="global__text">Our cases</h3>
						<h2 className="global__heading">
							Popular causes what you should know
						</h2>
					</div>
				</div>
				<div className="row">
					<div className="cases__slider">
						{casesData.map((caseItem) => (
							<CaseCard key={caseItem.title} {...caseItem} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cases;
