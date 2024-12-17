import Lottie from 'lottie-react';
import loginLottie from '../assets/Lottie/login.json'
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import SocialLogin from './Shared/SocialLogin';

const Login = () => {
    const { loginUser } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => console.log(err.message)
            )

    }
    return (
		<div>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left w-96">
						<Lottie animationData={loginLottie}></Lottie>
					</div>
					<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
						<form onSubmit={handleLogin} className="card-body">
							<h1 className="text-5xl font-bold my-8">
								Login now!
							</h1>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									name="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="password"
									name="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<a
										href="#"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">
									Login
								</button>
							</div>
						</form>
						<div className="py-4 mx-auto">
							<SocialLogin></SocialLogin>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;