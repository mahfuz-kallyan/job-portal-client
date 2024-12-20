import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
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
		<div className="card card-compact bg-gray-300 shadow-xl p-2 mt-12">
			<div className="flex items-center gap-2 p-2">
				<figure>
					<img className="w-14" src={company_logo} alt="Shoes" />
				</figure>
				<div>
					<h4 className="text-2xl">{company}</h4>
					<p className="flex items-center gap-2">
						<FaMapMarkedAlt></FaMapMarkedAlt> {location}
					</p>
				</div>
			</div>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>{description}</p>
				<div className="flex gap-2 flex-wrap">
					{requirements.map((skill, index) => (
						<p key={index} className="border-2 border-gray-700 p-1 text-center rounded-md hover:text-blue-700 hover:bg-gray-400">
							{skill}
						</p>
					))}
				</div>
				<div className="card-actions justify-center mt-4 items-center">
					<p>
						Salary: {salaryRange.min} - {salaryRange.max}{" "}
						{salaryRange.currency}
					</p>
					<Link to={`/jobs/${_id}`}>
						<button className="btn btn-neutral mt-4 hover:bg-gray-200">Apply</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HotJobsCard;
