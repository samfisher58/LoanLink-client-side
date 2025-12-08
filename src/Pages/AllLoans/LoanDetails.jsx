import React from 'react';
import { Link, useNavigate } from 'react-router';

const LoanDetails = () => {
    const navigate = useNavigate()
    return (
			<div>
                <p className='text-3xl'>This is loan details page</p>
				<p>
					This page displays detailed information about a specific loan selected
					from the All loan page. <br /> Information Displayed: <br />
					Loan Image <br /> Loan Title
					<br />
					Description
					<br /> Category <br />
					Interest Rate <br />
					Max Limit <br />
					Available EMI Plans <br />
					Apply Now Button <br />
					Features Apply Now Button: <br />
					Enabled only for logged-in users who are not Admin or Manager
					<br /> Clicking it redirects the user to the Loan Application Form
					<div className="card bg-base-100 w-96 shadow-sm">
						<figure className="px-10 pt-10">
							<img
								src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
								alt="Shoes"
								className="rounded-xl"
							/>
						</figure>
						<div className="card-body items-center text-center">
							<h2 className="card-title">Card Title</h2>
							<p>
								A card component has a figure, a body part, and inside body
								there are title and actions parts
							</p>
							<div className="card-actions">
								<Link to="/loan-application" className="btn btn-primary">
									Apply Now
								</Link>
                                <button onClick={()=>navigate(-1)} className='btn btn-secondary'>See All Loans</button>
							</div>
						</div>
					</div>
				</p>
			</div>
		);
};

export default LoanDetails;