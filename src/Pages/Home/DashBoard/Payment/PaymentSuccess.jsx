import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';

const PaymentSuccess = () => {
	const [searchParams] = useSearchParams();
	const sessionId = searchParams.get("session_id");
	const axiosSecure = useAxiosSecure();

	// const { data } = useQuery({
	// 	queryKey: ['payment-success', sessionId],
	// 	enabled: !!sessionId,
	// 	queryFn: async () => {
	// 		const res = await axiosSecure.patch(
	// 			`/verified-payment-success?session_id=${sessionId}`
	// 		);
	// 		console.log(res.data);
	// 		return res.data;
	// 	},
	// });
    useEffect(() => {
			if (sessionId) {
				axiosSecure
					.patch(`/verified-payment-success?session_id=${sessionId}`)
					.then(res => {
						console.log(res.data);
					});
			}
		}, [sessionId, axiosSecure]);

	
	return (
		<div>
			<p>
				payment successful <br />
				<span>{sessionId}</span>
			</p>
		</div>
	);
};

export default PaymentSuccess;
