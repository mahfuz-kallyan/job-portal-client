import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../UseAuth";
import Swal from "sweetalert2";

const ApplyJob = () => {
	const { id } = useParams();
	const { user } = useAuth();
	// console.log(id, user);

	const handleJob = (e) => {
		e.preventDefault();
		const form = e.target;
		const linkedIn = form.linkedin.value;
		const github = form.github.value;
		const resume = form.resume.value;
		// console.log({ linkedIn, github, resume });

		const jobApplication = {
			job_id: id,
			applicant_email: user.email,
			linkedIn,
			github,
			resume,
		};

		fetch("http://localhost:5000/job_applications", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(jobApplication),
		})
			.then((res) => res.json())
			.then((data) => {
                if (data.insertedId) {
                Swal.fire({
					title: "Drag me!",
					icon: "success",
					draggable: true,
				});    
				}
            })
        .catch(err => console.log(err)
        )
	};

	return (
		<div className="hero-content flex-col lg:flex-row-reverse">
			<div className="card bg-base-100 w-full shadow-2xl">
				<form onSubmit={handleJob} className="card-body">
					<h1 className="text-5xl text-center font-bold py-4">
						Apply now!
					</h1>
					<div className="form-control">
						<label className="label">
							<span className="label-text">LinkedIn URL</span>
						</label>
						<input
							type="url"
							name="linkedin"
							placeholder="LinkedIn Url"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">GitHub URL</span>
						</label>
						<input
							type="url"
							name="github"
							placeholder="Github url"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<label className="label">
							<span className="label-text">Resume URL</span>
						</label>
						<input
							type="url"
							name="resume"
							placeholder="Resume url"
							className="input input-bordered"
							required
						/>
					</div>
					<div className="form-control mt-6">
						<button className="btn btn-primary">Apply</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ApplyJob;
