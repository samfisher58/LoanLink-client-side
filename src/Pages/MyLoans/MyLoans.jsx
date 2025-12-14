import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loading from '../../Component/Loading/Loading';
import Swal from 'sweetalert2';

const MyLoans = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();
	const {
		data: loanApplications = [],
		isPending,
		refetch,
	} = useQuery({
		queryKey: ['loanApplications', user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/loan-application?email=${user.email}`
			);
			return res.data;
		},
	});
	if (isPending) {
		return <Loading></Loading>;
	}

	const handlePayment = async loanApplication => {
		const paymentInfo = {
			loanFee: loanApplication.loanFee,
			loanId: loanApplication.loanId,
			email: loanApplication.email,
			loanTitle: loanApplication.loanTitle,
		};
		const res = await axiosSecure.post('/create-checkout-session', paymentInfo);
		window.location.assign(res.data.url);
	};

	const handleDelete = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				axiosSecure.delete(`/loan-application/${id}/delete`).then(res => {
					if (res.data.deletedCount) {
						refetch();
					}
				});
				Swal.fire({
					title: 'Deleted!',
					text: 'Your file has been deleted.',
					icon: 'success',
				});
			}
		});
	};

	return (
		<div>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
				{loanApplications.length === 0 ? (
					<p className="font-semibold text-2xl text-center mt-5">
						NO application yet
					</p>
				) : (
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Loan ID</th>
								<th>Loan Info</th>
								<th>Amount</th>
								<th>Status</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{loanApplications.map((loanApplication, i) => (
								<tr key={loanApplication._id}>
									<th>{i + 1}</th>
									<td>{loanApplication.loanId}</td>
									<td>{loanApplication.loanTitle}</td>
									<td>{loanApplication.loanAmount}</td>
									<td>{loanApplication.loanStatus}</td>
									<td className=" flex gap-1">
										<div className="flex justify-center items-center">
											{loanApplication.paymentStatus === 'paid' ? (
												<p className=" text-center text-green-800 font-bold mr-2 p-2">
													Paid
												</p>
											) : (
												<button
													onClick={() => handlePayment(loanApplication)}
													className="btn btn-secondary text-white"
												>
													Pay
												</button>
											)}
										</div>

										<button
											onClick={() => handleDelete(loanApplication._id)}
											className="btn hover:btn-warning"
										>
											<RiDeleteBin6Line />
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default MyLoans;
