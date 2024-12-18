import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
	const job = useLoaderData();
	console.log(job);
	const {
		_id,
		title,
		company,
		company_logo,
		location,
		jobType,
		category,
		applicationDeadline,
		salaryRange,
		description,
		requirements,
		responsibilities,
		status,
		hr_email,
		hr_name,
	} = job;

	return (
		<div className="m-10 space-y-2">
			<h2 className="text-3xl">Job Details for {title} </h2>
			<p>apply for: {company}</p>
			<p>deadline: {applicationDeadline}</p>
			<Link to={`/applyJob/${_id}`}>
				<button className="btn btn-primary">Apply Now</button>
			</Link>
		</div>
	);
};

export default JobDetails;
