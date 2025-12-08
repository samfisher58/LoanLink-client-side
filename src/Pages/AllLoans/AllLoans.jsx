import React from 'react';
import { Link } from 'react-router';

const AllLoans = () => {
	return (
		<div>
            <p className='text-3xl'>This is all loan page</p>
			<p className="p-5 font-bold text-lg">
				This is from all loans This page displays all loans in a 3-column grid{' '}
				<br />
				layout using cards. Each card shows essential loan information, such as:{' '}
				<br />
				Loan Image <br /> Loan Title <br /> Loan Category <br />
				Interest <br />
				Max Loan Limit <br /> "View Details" <br /> Button Behavior: <br /> When
				the user clicks the "View Details" button, <br /> they are redirected to
				the Loan Details Page, where they can see <br />
				more information about the selected loan.
			</p>

			{/* loan details */}

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
						A card component has a figure, a body part, and inside body there
						are title and actions parts
					</p>
					<div className="card-actions">
						<Link to="/loan-details" className="btn btn-primary">Buy Now</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllLoans;
