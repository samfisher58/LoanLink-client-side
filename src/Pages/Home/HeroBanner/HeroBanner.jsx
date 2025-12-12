import React from 'react';
import heroImg from '../../../assets/tierra-mallorca-rgJ1J8SDEAY-unsplash.jpg'
import { Link } from 'react-router';

const HeroBanner = () => {
    return (
			<div
				className="hero min-h-[600px] mx-auto"
				style={{
					backgroundImage: `url(${heroImg})`,
				}}
			>
				<div className="hero-overlay"></div>
				<div className="hero-content text-neutral-content text-center">
					<div className="max-w-md">
						<h1 className="mb-5 text-3xl font-bold">
							Your Perfect Loan Starts Here
						</h1>
						<p className="mb-5">
							Whether you're planning a new purchase, handling an emergency, or
							investing in your future, LoanLink makes getting the right loan
							simple and stress-free. Browse through our clear, flexible loan
							schemes designed to support your personal and financial goals. No
							hidden steps, no confusing processes — just transparent options
							tailored for real-life needs.
						</p>
						<Link to="/all-loans" className="btn btn-primary">
							Explore All Loans
						</Link>
					</div>
				</div>
			</div>
		);
};

export default HeroBanner;