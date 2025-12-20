import React from 'react';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
	{
		id: 1,
		name: 'Sarah Mwangi',
		role: 'Small Business Owner, Nairobi',
		rating: 5,
		review:
			'LoanLink has completely transformed how I manage loans for my customers. Before, everything was on paper and Excel sheets — it was chaotic and error-prone. Now, applications come in digitally, verification is faster, and EMI reminders ensure timely repayments. My recovery rate has improved by over 30%! Highly recommended for any microfinance group.',
	},
	{
		id: 2,
		name: 'Rajesh Patel',
		role: 'NGO Loan Coordinator, Gujarat',
		rating: 5,
		review:
			'As an NGO serving rural women entrepreneurs, we needed a simple yet powerful system. LoanLink is exactly that. The approval workflow is transparent, document uploads are secure, and the automated EMI schedule saves us hours every month. The support team is responsive and always ready to help. Thank you for building such an affordable and effective tool!',
	},
	{
		id: 3,
		name: 'Amina Hassan',
		role: 'Microfinance Manager, Mombasa',
		rating: 5,
		review:
			"I was skeptical at first about moving to a web-based system, but LoanLink made the transition seamless. The dashboard gives me a clear overview of all active loans, pending reviews, and repayments. Disbursements are now direct to mobile money — no more cash handling risks. It's reliable, easy to use, and has made our operations much more professional.",
	},
];

export default function CustomerFeedback() {
	return (
		<section
			className="py-20 bg-gradient-to-b from-white to-blue-50"
			id="testimonials"
		>
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						What Our Customers Say
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Real stories from microfinance organizations and NGOs using LoanLink
						every day.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{reviews.map((review, index) => (
						<motion.div
							key={review.id}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							whileHover={{ y: -10 }}
							className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden"
						>
							<div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>

							<Quote className="w-12 h-12 text-blue-500 mb-6 opacity-20" />

							<p className="text-gray-700 leading-relaxed mb-6 italic">
								"{review.review}"
							</p>

							<div className="flex items-center justify-between">
								<div>
									<h4 className="font-semibold text-gray-900">{review.name}</h4>
									<p className="text-sm text-gray-500">{review.role}</p>
								</div>

								<div className="flex items-center gap-1">
									{[...Array(review.rating)].map((_, i) => (
										<Star
											key={i}
											className="w-5 h-5 fill-yellow-400 text-yellow-400"
										/>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
