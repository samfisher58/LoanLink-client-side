import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import Loading from '../../../../Component/Loading/Loading';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const ManageLoans = () => {
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();
	const { data: managerCreatedLoans = [], isPending, refetch } = useQuery({
		queryKey: ['loan-created-by-manager', user.email],
		queryFn: async () => {
			const res = await axiosSecure.get(`/all-loans-admin?email=${user.email}`);
			return res.data;
		},
	});
	if (isPending) {
		return <Loading></Loading>;
	}

	const handleDelete = async managerCreatedLoan => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(async result => {
			if (result.isConfirmed) {
				await axiosSecure.delete(
					`/all-loans/${managerCreatedLoan._id}`
				);				
                refetch();
				Swal.fire({
					title: 'Deleted!',
					text: 'Your file has been deleted.',
					icon: 'success',
				});
			}
		});
	};

	return (
		<div className="overflow-x-auto">
			<h1 className="text-3xl m-5 text-center">
				Loans Created By Me({managerCreatedLoans.length})
			</h1>
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th></th>
						<th>Image</th>
						<th>Title</th>
						<th>Interest</th>
						<th>Category</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{managerCreatedLoans.map((managerCreatedLoan, i) => (
						<tr key={managerCreatedLoan._id} className="hover:bg-base-300">
							<th>{i + 1}</th>

							<td>
								<div className="flex items-center gap-3">
									<div className="avatar">
										<div className="mask mask-squircle h-12 w-12">
											<img
												src={managerCreatedLoan.images}
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
								</div>
							</td>

							<td>{managerCreatedLoan.title}</td>
							<td>{managerCreatedLoan.interestRate}</td>
							<td>{managerCreatedLoan.category}</td>
							<td className="flex gap-2 justify-center items-center">
								<Link
									to={`/dashboard/update-loans/${managerCreatedLoan._id}`}
									className="btn btn-primary"
								>
									Update
								</Link>
								<button
									onClick={() => handleDelete(managerCreatedLoan)}
									className="btn btn-warning"
								>
									Delete
								</button>
								<button className="btn btn-secondary">Search</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ManageLoans;
