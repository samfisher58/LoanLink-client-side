import React, { useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../Component/Loading/Loading';
import { MdOutlineViewAgenda } from 'react-icons/md';

const LoanApplicationAdmin = () => {
    const axiosSecure = useAxiosSecure();
	// const [loanApplication, setLoanApplication]= useState(null)
	const [searchText, setSearchText]= useState(null)
    const { data: applications = [], isPending } = useQuery({
			queryKey: ['application-admin', searchText],
			queryFn: async () => {
				const res = await axiosSecure.get(
					`/loan-applications?loanStatus=${searchText}`
				);
				return res.data;
			},
		});

    if (isPending){
        return <Loading></Loading>
    }

// const handleViewApplication = application => {
	
	// setLoanApplication(application);
// };
console.log(searchText);


			return (
				<div>
					<h1 className="text-3xl m-5 text-center">Loan Applications</h1>
					<span className='mx-2 text-xl'>Filter Application By:</span>
					<select
						onChange={(e)=>setSearchText(e.target.value)}
						defaultValue=""
						className="select select-info"
					>
						
						<option value="" >All</option>
						<option value ="Pending">Pending</option>
						<option value="Approved" >Approved</option>
						<option value="Rejected" >Rejected</option>
					</select>
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
										<td
											onClick={() => handleViewApplication(application)}
											className="btn btn-secondary mt-3"
										>
											<MdOutlineViewAgenda />
											View
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					{/* modal */}
					{/* Open the modal using document.getElementById('ID').showModal() method */}
					<button
						className="btn"
						onClick={() => document.getElementById('my_modal_5').showModal()}
					>
						open modal
					</button>
					<dialog
						id="my_modal_5"
						className="modal modal-bottom sm:modal-middle"
					>
						<div className="modal-box">
							<h3 className="font-bold text-lg">Hello!</h3>
							<p className="py-4">
								Press ESC key or click the button below to close
							</p>
							<div className="modal-action">
								<form method="dialog">
									{/* if there is a button in form, it will close the modal */}
									<button className="btn">Close</button>
								</form>
							</div>
						</div>
					</dialog>
				</div>
			);
};

export default LoanApplicationAdmin;