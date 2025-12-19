
import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Loading from '../../../../Component/Loading/Loading';
import { useNavigate, useParams } from 'react-router';

const LoanUpdate = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const axiosSecure = useAxiosSecure();

	const { register, handleSubmit, reset } = useForm();

	// 🔹 Fetch single loan
	const { data: loan, isPending } = useQuery({
		queryKey: ['single-loan', id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/all-loans/${id}`);
			return res.data;
		},
	});

	// 🔹 Pre-fill form when loan data arrives
	useEffect(() => {
		if (loan) {
			reset({
				title: loan.title,
				description: loan.description,
				interestRate: loan.interestRate,
				category: loan.category,
				maxLimit: loan.maxLimit,
				emiPlans: loan.emiPlans,
				showOnHome: loan.showOnHome.toString(),
			});
		}
	}, [loan, reset]);

	// 🔹 Submit update
	const onSubmit = async data => {
		const updatedLoan = {
			...data,
			showOnHome: data.showOnHome === 'true',
		};

		await axiosSecure.patch(`/all-loans/${id}`, updatedLoan);

		Swal.fire({
			icon: 'success',
			title: 'Updated!',
			text: 'Loan updated successfully',
		});

		navigate(-1)
	};

	if (isPending) return <Loading />;

	return (
		<div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full max-w-3xl bg-base-100 shadow-xl rounded-2xl p-6"
			>
				<h2 className="text-2xl font-bold text-center mb-6">Update Loan</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Title */}
					<div>
						<label className="label">Loan Title</label>
						<input
							{...register('title', { required: true })}
							className="input input-bordered w-full"
						/>
					</div>

					{/* Category */}
					<div>
						<label className="label">Category</label>
						<input
							{...register('category', { required: true })}
							className="input input-bordered w-full"
						/>
					</div>

					{/* Interest Rate */}
					<div>
						<label className="label">Interest Rate</label>
						<input
							{...register('interestRate', { required: true })}
							className="input input-bordered w-full"
						/>
					</div>

					{/* Max Limit */}
					<div>
						<label className="label">Max Loan Limit</label>
						<input
							{...register('maxLimit', { required: true })}
							className="input input-bordered w-full"
						/>
					</div>

					{/* EMI Plans */}
					<div>
						<label className="label">EMI Plans</label>
						<input
							{...register('emiPlans', { required: true })}
							className="input input-bordered w-full"
						/>
					</div>

					{/* Show on Home */}
					<div>
						<label className="label">Show On Home</label>
						<select
							{...register('showOnHome', { required: true })}
							className="select select-bordered w-full"
						>
							<option value="true">Yes</option>
							<option value="false">No</option>
						</select>
					</div>

					{/* Description */}
					<div className="md:col-span-2">
						<label className="label">Description</label>
						<textarea
							{...register('description', { required: true })}
							className="textarea textarea-bordered w-full"
						/>
					</div>
				</div>

				<div className="flex justify-center mt-6 gap-4">
					<button type="submit" className="btn btn-primary">
						Update Loan
					</button>

					<button
						type="button"
						onClick={() => navigate(-1)}
						className="btn btn-outline"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoanUpdate;
