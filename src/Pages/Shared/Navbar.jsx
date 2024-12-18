import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../Context/AuthContext/AuthContext";
import icon from "../../assets/icons/icons8-job-application-64.png";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {
				console.log("logout successfully");
			})
			.catch((err) => {
				console.log("failed to logOut");
			});
	};

	const links = (
		<>
			<li>
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<NavLink>
				<li></li>
			</NavLink>
		</>
	);
	return (
        <div>
			<div className="navbar bg-cyan-500 py-6 px-8">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							{links}
						</ul>
					</div>
					<a className="flex justify-center items-center">
                        <img src={icon} alt="" />
                        <h3 className="text-3xl font-bold">Job Portal</h3>
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{links}</ul>
				</div>
				<div className="navbar-end gap-4">
					{user ? (
						<button onClick={handleLogOut} className="btn">
							Log Out
						</button>
					) : (
						<div className="flex justify-center items-center gap-4">
							<Link to={"/login"}>
								{" "}
								<button className="btn">Sign In</button>{" "}
							</Link>
							<Link to={"/register"}>
								{" "}
								<button className="btn">Register</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
