import Image from "next/image";

interface ListItem {
	text: string;
}

const listItems: ListItem[] = [
	{ text: "Education" },
	{ text: "Health" },
	{ text: "Agriculture" },
	{ text: "Water Sanitation and Hygiene" },
	{ text: "Women Empowerment" },
	{ text: "Inter-Religious Peace Building" },
	{ text: "Child Protection" },
	{ text: "Outreach to People Living with Disabilities" },
	{ text: "Humanitarian Response" },
	{ text: "Gender Based Violence" },
	{ text: "Environmental Awareness" },
	{ text: "Clean Renewable Energy" },
];

function AboutList() {
	return (
		<ul className="about__list">
			{listItems.map((item) => (
				<li
					key={item.text}
					className="about__list-item flex align-items-center mb-2"
				>
					<Image
						className="cases__card-range--dollar p-1 me-2"
						src="/assets/img/check.svg"
						alt="check icon"
						width={24}
						height={24}
					/>
					<span className="global__desc m-0">{item.text}</span>
				</li>
			))}
		</ul>
	);
}

function About() {
	return (
		<div className="about global__py">
			<div className="container p-sm-0">
				<div className="row">
					<div className="col-6 my-auto my-xl-0">
						<div
							className="d-none d-lg-flex gap-4"
							data-aos="fade-right"
							data-aos-duration="1000"
						>
							<div className="about__image">
								<Image
									className="img-fluid"
									src="/assets/img/kudoc6.jpg"
									alt="KUDOC image 1"
									width={400}
									height={500}
								/>
							</div>
							<div className="about__image">
								<Image
									className="img-fluid"
									src="/assets/img/kudoc9.jpg"
									alt="KUDOC image 2"
									width={400}
									height={500}
								/>
							</div>
						</div>
					</div>
					<div
						className="col-12 col-md-9 col-lg-6"
						data-aos="fade-left"
						data-aos-duration="1000"
					>
						<h2 className="about__heading global__heading">
							Welcome to the Official Website of KUDOC !!
						</h2>
						<p className="about__desc global__desc mb-3">
							The Kumbo Development and Orientation Centre - abbreviated as
							KUDOC is a Cameroon based Non-Governmental Organization created in
							1999 by Dr. Banadzem Joseph Lukong. KUDOC is impacting the lives
							of over 1.5 million people in the following Domains:
						</p>
						<AboutList />
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
