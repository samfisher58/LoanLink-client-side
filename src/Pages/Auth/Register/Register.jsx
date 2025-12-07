import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';

const Register = () => {
    const {register, handleSubmit, formState: {errors} }= useForm();
    const { registerUser } = useAuth();
    const handleRegistration = (data) =>{
        registerUser(data.email, data.password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return (
			<div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
				<p className='text-center text-3xl'>Please Register to Continue</p>
				<form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
					<fieldset className="fieldset">
						{/* name field */}
						<label className="label">Name</label>
						<input
							type="text"
							{...register('name', { required: true })}
							className="input"
							placeholder="Your Name"
						/>
						{errors.name?.type === 'required' && (
							<p className="text-red-500">Name is required.</p>
						)}
						{/* email field */}

						<label className="label">Email</label>
						<input
							type="email"
							{...register('email', { required: true })}
							className="input"
							placeholder="Email"
						/>
						{/* photo image field */}
						<label className="label">Photo</label>
						<input
							type="file"
							{...register('photo', { required: true })}
							className="file-input"
							placeholder="Your Photo"
						/>

						{errors.name?.type === 'required' && (
							<p className="text-red-500">Photo is required.</p>
						)}

						{/* Role */}
						<label className="label">Pick a role</label>
						<select defaultValue="Pick a Role" className="select">
							<option disabled={true}>Role</option>
							<option>Borrower</option>
							<option>Manager</option>
						</select>

						{/* Password field */}

						<label className="label">Password</label>

						<input
							type="password"
							{...register('password', {
								required: true,
								minLength: 6,
								pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
							})}
							className="input"
							placeholder="Password"
						/>
						{errors.password?.type === 'required' && (
							<p className="text-red-500">Password is required.</p>
						)}
						{errors.password?.type === 'minLength' && (
							<p className="text-red-500">
								Password must be 6 characters or longer
							</p>
						)}
						{errors.password?.type === 'pattern' && (
							<p className="text-red-500">
								Password must have at least one uppercase, at least one
								lowercase, at least one number, and at least one special
								characters
							</p>
						)}
						<div>
							<a className="link link-hover">Forgot password?</a>
						</div>
						<button className="btn btn-primary mt-4">Register</button>
						<p className="text-center">Already have an account?</p>
						<Link
							to="/login"
							className="text-primary font-semibold text-center underline"
						>
							Login
						</Link>
					</fieldset>
				</form>
			</div>
		);
};

export default Register;