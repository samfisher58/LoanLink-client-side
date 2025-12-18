import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../Component/Loading/Loading';
import { MdOutlineViewAgenda } from 'react-icons/md';

const LoanApplicationAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {data: applications=[], isPending} = useQuery({
        queryKey: ["application-admin"],
        queryFn: async()=>{
            const res = await axiosSecure.get('/loan-applications');
            return res.data
        }
    })

    if (isPending){
        return <Loading></Loading>
    }
			return (
				<div>
					<h1 className="text-3xl m-5 text-center">Loan Applications</h1>
					<div className="overflow-x-auto">
						<table className="table">
							{/* head */}
							<thead>
								<tr>
									<th></th>
									<th>Loan ID</th>
									<th>User</th>
									<th>Loan Category</th>
									<th>Amount</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{applications.map((application, i) => (
									<tr key={application._id} className="hover:bg-base-300">
										<th>{i + 1}</th>
										<td>{application.loanId}</td>
										<td>
											<div>{application.email}</div>
											<div>{application.firstName}</div>
										</td>
										<td>{application.loanTitle}</td>
										<td>{application.loanAmount}</td>
										<td>{application.loanStatus}</td>
										<td className="btn btn-primary mt-3">
											<MdOutlineViewAgenda />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			);
};

export default LoanApplicationAdmin;