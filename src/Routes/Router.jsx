import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import AllLoans from "../Pages/AllLoans/AllLoans";
import LoanDetails from "../Pages/AllLoans/LoanDetails";
import LoanApplicationForm from "../Pages/AllLoans/LoanApplication/LoanApplicationForm";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    // root layout
	{
		path: '/',
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home
			},
			{
				path: 'all-loans',
				Component: AllLoans
			},
			{
				path: 'loan-details',
				Component: LoanDetails
			},
			{
				path: 'loan-application',
				Component: LoanApplicationForm
			},
			{
				path: 'about-us',
				Component: AboutUs
			},
			{
				path: 'contact',
				Component: Contact
			},
		],
	},
    // authLayout
	{
		path: '/',
		Component: AuthLayout,
		children: [
			{
				path: 'login',
				Component: Login,
			},
			{
				path: 'register',
				Component: Register,
			},
		],
	},
    // DashboardLayout
    {

    }
]);
