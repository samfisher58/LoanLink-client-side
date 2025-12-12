import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Loading from '../../Component/Loading/Loading';

const MyLoans = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();
	const { data: loanApplications = [], isPending } = useQuery({
		queryKey: ["loanApplications", user?.email],
		queryFn: async () => {
			const res = await axiosSecure.get(
				`/loan-application?email=${user.email}`
			);
			return res.data;
		},
	});
    if(isPending){
        return <Loading></Loading>
    }

	return (
		<div>
			<div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
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
							<tr>
								<th>{i + 1}</th>
								<td>{loanApplication.loanId}</td>
								<td>{loanApplication.loanTitle}</td>
								<td>{loanApplication.loanAmount}</td>
								<td>{loanApplication.loanStatus}</td>
								<td className=" flex gap-1">
									<button className="btn btn-secondary text-white">Pay</button>

									<button className='btn hover:btn-warning'>
										<RiDeleteBin6Line />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyLoans;
