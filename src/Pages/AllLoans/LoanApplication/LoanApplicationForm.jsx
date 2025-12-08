import React from 'react';
import { useNavigate } from 'react-router';

const LoanApplicationForm = () => {
    const navigate = useNavigate()
    return (
			<div>
				<p className='text-2xl'>this is from loan Application form</p>
				<button className="btn btn-secondary" onClick={() => navigate(-1)}>
					Back to Loan Details
				</button>
			</div>
		);
};

export default LoanApplicationForm;