import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../Component/Loading/Loading';

const AllLoansAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {data: allLoansAdmin=[], isPending} = useQuery({
        queryKey:['allLoanAdmin'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/all-loans-admin');
            return res.data
        }
    })
    
    if(isPending){
        return <Loading></Loading>
    }
    
    console.log(allLoansAdmin);
	return (
		<div className="overflow-x-auto">
			<h1 className="text-3xl m-5 text-center">All Loans</h1>
			<table className="table">
				{/* head */}
				<thead>
					<tr>
						<th></th>
						<th>image</th>
						<th>Title</th>
						<th>Interest</th>
						<th>Category</th>
						<th>Created By</th>
						<th>Show on Home</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{allLoansAdmin.map((loan, i) => (
						<tr key={loan._id}>
							<th>{i + 1}</th>

							<td>
								<div className="flex items-center gap-3">
									<div className="avatar">
										<div className="mask mask-squircle h-12 w-12">
											<img
												src={loan.images}
												alt="Avatar Tailwind CSS Component"
											/>
										</div>
									</div>
								</div>
							</td>
							<td>{loan.title}</td>
							<td>{loan.interestRate}</td>
							<td>{loan.category}</td>
							<td>{loan.createdBy}</td>
							<td>
								{loan.showOnHome === true ? (
									<span>Visible</span>
								) : (
									<span>Hidden</span>
								)}
							</td>
							<td className="flex gap-2">
								<button className="btn btn-secondary">Show</button>
								<button className="btn btn-warning">Hide</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllLoansAdmin;
