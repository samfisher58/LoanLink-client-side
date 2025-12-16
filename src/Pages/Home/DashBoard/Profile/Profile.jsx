import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Loading from '../../../../Component/Loading/Loading';

const Profile = () => {
    const { user, logOut } = useAuth();
    const axiosSecure = useAxiosSecure()
  

    const { data, isPending } = useQuery({
			queryKey: ['userProfile', user?.email],
			enabled: !!user?.email,
			queryFn: async () => {
				console.log('API CALLING WITH:', user.email);

				const res = await axiosSecure.get(`/users?email=${user.email}`);

				console.log('API RESPONSE:', res.data);
				return res.data;
            
			},
		});

if(isPending){
    return <Loading></Loading>
}

    const handleLogOut = () => {
		logOut()
			.then()
			.catch(error => {
				console.log(error);
			});


	};
    return (
			<div className="card card-side bg-base-100 shadow-sm mt-5 p-5">
				<figure>
					<img src={user.photoURL} alt={user.displayName} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">Name:</h2>
					<p>{data?.displayName}.</p>
					<h2 className="card-title">Email:</h2>
					<p>{data.email}.</p>
					<h2 className="card-title">Role:</h2>
					<p>{data.userType}</p>

					<div className="card-actions justify-end">
						<button onClick={handleLogOut} className="btn btn-primary">
							Log Out
						</button>
					</div>
				</div>
			</div>
		);
};

export default Profile; 

// displayName;
// ('Saymon Islam');
// email;
// ('islamsaymon18@gmail.com');
// photoURL;
// ('https://i.ibb.co/ZjWmYH1/safe-delivery.png');
// userType;
// ('Manager');