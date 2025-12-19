import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { FcApprove, FcDisapprove } from 'react-icons/fc';
import Loading from '../../../../Component/Loading/Loading';

import { Link } from 'react-router';

const ManageUsers = () => {
	const axiosSecure = useAxiosSecure();

	const { data: users = [], isPending } = useQuery({
		queryKey: ['users'],
		queryFn: async () => {
			const res = await axiosSecure.get('/users');
			return res.data;
		},
	});
	if (isPending) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h1 className="text-3xl m-5 text-center">Manage users</h1>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{users.map((user, i) => (
							<tr key={user._id} className="hover:bg-base-300">
								<th>{i + 1}</th>
								<td>{user.displayName}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
								<td className="flex gap-2">
									<Link
										to={`/dashboard/manage-user-role/${user._id}`}
										// onClick={()=> handleApprove(user._id)}
										className="btn hover:btn-secondary"
									>
										Update Role
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ManageUsers;
