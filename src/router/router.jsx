import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../Pages/ApplyJob";
import MyApplications from "../Pages/MyApplications";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error></Error>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/jobs/:id",
				element: (
					<PrivateRoute>
						<JobDetails></JobDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/jobs/${params.id}`),
			},
			{
				path: "/applyJob/:id",
				element: (
					<PrivateRoute>
						{" "}
						<ApplyJob></ApplyJob>
					</PrivateRoute>
				),
			},
			{
				path: "/myApplications",
				element: (
					<PrivateRoute>
						<MyApplications></MyApplications>{" "}
					</PrivateRoute>
				),
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
		],
	},
]);

export default router;
