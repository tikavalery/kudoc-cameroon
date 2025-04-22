function Organization() {
	return (
		<section className="org global__py pt-0" aria-label="Organization Mission">
			<div className="container p-sm-0">
				<div className="row">
					<div
						className="col-12 col-md-9 col-lg-7 text-center m-auto service__m"
						data-aos="fade-down"
						data-aos-duration="1000"
					>
						<h2 className="global__heading m-0" id="org-mission">
							The mission of our organization.
						</h2>
						<p
							className="org__desc global__desc mt-3 mb-0"
							aria-labelledby="org-mission"
						>
							Creating self-awareness and empowering the underprivileged.
						</p>
					</div>
				</div>
				{/* ... rest of the component ... */}
			</div>
		</section>
	);
}

export default Organization;
