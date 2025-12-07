import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
			<div className="max-w-7xl mx-auto p-5">
				<div>Add a logo here</div>
				<div className='flex'>
                    <div className='flex-1'>
					<Outlet></Outlet>
                    </div>
					<div className='flex-1'>
						<p className="text-5xl">Add a relevant picture here</p>
					</div>
				</div>
			</div>
		);
};

export default AuthLayout;