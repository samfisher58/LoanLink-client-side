import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
	const {user, logOut}  = useAuth();
	const handleLogOut = () => {
		logOut()
			.then()
			.catch(error => {
				console.log(error);
			});
	};
	const links = (
		<>
			<li>
				<NavLink to="/">Home</NavLink>
			</li>
			<li>
				<NavLink to="/all-loans">All Loans</NavLink>
			</li>
			<li>
				<NavLink to="/about-us">About Us</NavLink>
			</li>
			<li>
				<NavLink to="/contact">Contact</NavLink>
			</li>
			<li>
				<NavLink to="/dashboard">DashBoard(private route)</NavLink>
			</li>
		</>
	);
    return (
			<div className="navbar bg-base-100 shadow-sm">
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{' '}
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>{' '}
							</svg>
						</div>
						<ul
							tabIndex="-1"
							className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
						>
							{links}
						</ul>
					</div>
					<Link to="/" className="btn btn-ghost text-xl">
						LoanLink
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{links}</ul>
				</div>
				<div className="navbar-end flex items-center gap-3">
					{user ? (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full border-2 border-primary overflow-hidden">
									<img alt="User" src={user.photoURL} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="menu dropdown-content mt-3 p-4 shadow-lg bg-base-100 rounded-xl w-60 animate-slide-in"
							>
								<li className="font-semibold text-lg">{user.displayName}</li>

								<li className="text-sm text-gray-500">{user.email}</li>
								<li className="mt-2">
									<button
										onClick={handleLogOut}
										className="btn btn-primary w-full hover:btn-accent transition-colors duration-200"
									>
										Log Out
									</button>
								</li>
							</ul>
						</div>
					) : (
						<NavLink
							to="/login"
							className="btn btn-primary hover:btn-accent transition-colors duration-200"
						>
							Sign In
						</NavLink>
					)}
				</div>
			</div>
		);
};

export default Navbar;