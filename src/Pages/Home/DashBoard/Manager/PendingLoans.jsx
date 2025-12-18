import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PendingLoans = () => {
    const axiosSecure = useAxiosSecure();
    const {data: loanApplications = []} = useQuery({
        queryKey: ["pending-loans"],
        queryFn: async()=>{
            const res = await axiosSecure.get('/loan-applications?loanStatus=Pending');
            return res.data
        }
    })
   

    return (
			<div>
				<h1 className="text-3xl m-5 text-center">Pending Loan Application</h1>
				<div className="overflow-x-auto">
					<table className="table">
						{/* head */}
						<thead>
							<tr>
								<th></th>
								<th>Loan ID</th>
								<th>User Info</th>
								<th>Amount</th>
								<th>Date</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{loanApplications.map((loanApplication, i) => (
								<tr key={loanApplication._id}>
									<th>{i + 1}</th>
									<td>{loanApplication.loanId}</td>
									<td>
										<div>{loanApplication.firstName}</div>
										<div>{loanApplication.email}</div>
									</td>
									<td>{loanApplication.loanAmount}</td>
									<td>{loanApplication.createdAt}</td>
									<td className="flex gap-2">
										<button className="btn btn-primary flex-1">Approved</button>
										<button className="btn btn-warning flex-1">Reject</button>
										<button className="btn btn-secondary flex-1">View</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
};

export default PendingLoans;