import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';

const LoanApplicationForm = () => {
	const {register,handleSubmit } = useForm();
    const navigate = useNavigate();
	const {user} = useAuth();

	const handleLoanApplicaiton = (data,e)=>{
		e.preventDefault()
		console.log(data);

		Swal.fire({
			title: 'Before you proceed..',
			text: "You'll be charged $10 for Loan application!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, proceed!',
		}).then(result => {
			if (result.isConfirmed) {
				Swal.fire({
					title: 'Submitted!',
					text: 'Please check Dashboard for Application status.',
					icon: 'success',
				});
			}
		});
	}

    return (
			<div>
				{/* loan applicaiton form */}
				<form onSubmit={handleSubmit(handleLoanApplicaiton)}>
					<fieldset className="card-body">
						<h4 className="text-2xl font-semibold">Submit your loan application</h4>
						{/* user email */}
						<label className="label">User Email</label>
						<input
							type="email"
							{...register('userEmail')}
							defaultValue={user?.email}
							className="input"
							placeholder="User Email"
						/>
						{/* Loan Title(get it from loan details) */}
						<label className="label">Loan title</label>
						<input
							type="text"
							{...register('loanTitle')}
							// defaultValue={user?.email}
							className="input"
							placeholder="Loan Title"
						/>
						{/* interest rate */}
						<label className="label">Interest rate</label>
						<input
							type="text"
							{...register('interestRate')}
							// defaultValue={user?.email}
							className="input"
							placeholder="Interest rate"
						/>
						{/* First Name */}
						<label className="label">First Name</label>
						<input
							type="text"
							{...register('firstName', { required: true })}
							className="input"
							placeholder="First Name"
						/>
						{/* Last Name */}
						<label className="label">Last Name</label>
						<input
							type="text"
							{...register('lastName', { required: true })}
							className="input"
							placeholder="Last Name"
						/>
						{/* Contact number */}
						<label className="label">Contact Number</label>
						<input
							type="text"
							{...register('contact', { required: true })}
							className="input"
							placeholder="Contact Number"
						/>
						{/* National ID / Passport Number */}
						<label className="label">National ID / Passport Number</label>
						<input
							type="text"
							{...register('nid', { required: true })}
							className="input"
							placeholder="NID / Passport"
						/>
						<label className="label">Income Source</label>
						<input
							type="text"
							{...register('incomeSource', { required: true })}
							className="input"
							placeholder="Income Source"
						/>
						<label className="label">Monthly Income </label>
						<input
							type="text"
							{...register('monthlyIncome', { required: true })}
							className="input"
							placeholder="Monthly Income"
						/>
						<label className="label">Loan Amount </label>
						<input
							type="text"
							{...register('loanAmount', { required: true })}
							className="input"
							placeholder="Loan Amount"
						/>
						<label className="label">Reason for Loan </label>
						<input
							type="text"
							{...register('loanReason', { required: true })}
							className="input"
							placeholder="Reason for Loan"
						/>
						<label className="label">Address</label>
						<input
							type="text"
							{...register('Address', { required: true })}
							className="input"
							placeholder="Reason for Loan"
						/>
						<label className="label">Extra Notes</label>
						<input
							type="text"
							{...register('notes')}
							className="input"
							placeholder="Reason for Loan"
						/>
						<label className="label">Status</label>
						<input
							type="text"
							defaultValue="Pending"
							className="input"
							placeholder="Pending"
							disabled
						/>
					</fieldset>
					<input className='btn btn-primary mb-3' type="submit" value="Submit loan" />
				</form>

				<button className="btn btn-secondary" onClick={() => navigate(-1)}>
					Back to Loan Details
				</button>
			</div>
		);
};

export default LoanApplicationForm;