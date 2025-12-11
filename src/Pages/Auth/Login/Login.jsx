import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Component/Loading/Loading';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { signInUser, loading } = useAuth();
	const location = useLocation();
	const navigate = useNavigate();
	const handleLogin = data => {
		console.log('form data:', data);
		signInUser(data.email, data.password)
			.then(result => {
				console.log(result.user);
				navigate(location?.state || '/');
			})
			.catch(error => {
				console.log(error);
			});
	};

	if (loading) {
		return <Loading></Loading>;
	}

	return (
		<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
			<h3 className="text-3xl text-center">Welcome back</h3>
			<p className="text-center">Please Login</p>
			<form className="card-body" onSubmit={handleSubmit(handleLogin)}>
				<fieldset className="fieldset">
					{/* email field */}
					<label className="label">Email</label>
					<input
						type="email"
						{...register('email', { required: true })}
						className="input"
						placeholder="Email"
					/>
					{errors.email?.type === 'required' && (
						<p className="text-red-500">Email is required</p>
					)}

					{/* password field */}
					<label className="label">Password</label>
					<input
						type="password"
						{...register('password', { required: true, minLength: 6 })}
						className="input"
						placeholder="Password"
					/>
					{errors.password?.type === 'minLength' && (
						<p className="text-red-500">
							Password must be 6 characters or longer{' '}
						</p>
					)}

					<div>
						<a className="link link-hover">Forgot password?</a>
					</div>
					<button className="btn btn-primary mt-4">Login</button>
					<p className="text-center">New to LoanLink? </p>
					<Link
						state={location.state}
						className="text-center text-primary font-semibold underline"
						to="/register"
					>
						Register
					</Link>
				</fieldset>
			</form>
			<span className="text-center font-bold text-lg">Or</span>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;
