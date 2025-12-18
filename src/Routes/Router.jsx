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
import PrivateRoutes from "./PrivateRoutes";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyLoans from "../Pages/MyLoans/MyLoans";
import PaymentSuccess from "../Pages/Home/DashBoard/Payment/PaymentSuccess";
import PaymentCancel from "../Pages/Home/DashBoard/Payment/PaymentCancel";
import Profile from "../Pages/Home/DashBoard/Profile/Profile";
import ManageUsers from "../Pages/Home/DashBoard/Admin/ManageUsers";
import AllLoansAdmin from "../Pages/Home/DashBoard/Admin/AllLoansAdmin";
import LoanApplicationAdmin from "../Pages/Home/DashBoard/Admin/LoanApplicationAdmin";
import AddLoans from "../Pages/Home/DashBoard/Manager/AddLoans";
import ManageLoans from "../Pages/Home/DashBoard/Manager/ManageLoans";
import PendingLoans from "../Pages/Home/DashBoard/Manager/PendingLoans";
import ApprovedLoans from "../Pages/Home/DashBoard/Manager/ApprovedLoans";
import ManagerProfile from "../Pages/Home/DashBoard/Manager/ManagerProfile";

export const router = createBrowserRouter([
	// root layout
	{
		path: '/',
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: Home,
			},
			{
				path: 'all-loans',
				Component: AllLoans,
			},
			{
				path: 'all-loans/:id',
				Component: LoanDetails,
			},
			{
				path: 'loan-application/:id',
				Component: LoanApplicationForm,
			},
			{
				path: 'about-us',
				Component: AboutUs,
			},
			{
				path: 'contact',
				Component: Contact,
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
		path: '/dashBoard',
		element: (
			<PrivateRoutes>
				<DashBoardLayout></DashBoardLayout>
			</PrivateRoutes>
		),
		children: [
			{
				path: 'my-loans',
				Component: MyLoans,
			},
			{
				path: 'profile',
				Component: Profile,
			},
			{
				path: 'payment-success',
				Component: PaymentSuccess,
			},
			{
				path: 'payment-cancel',
				Component: PaymentCancel,
			},
			{
				path: 'manage-users',
				Component: ManageUsers,
			},
			{
				path: 'all-loans-admin',
				Component: AllLoansAdmin,
			},
			{
				path: 'loan-application-admin',
				Component: LoanApplicationAdmin,
			},
			{
				path: 'add-loan',
				Component: AddLoans,
			},
			{
				path: 'manage-loans',
				Component: ManageLoans,
			},
			{
				path: 'pending-loans',
				Component: PendingLoans,
			},
			{
				path: 'approved-loans',
				Component: ApprovedLoans,
			},
			{
				path: 'manager-profile',
				Component: ManagerProfile,
			},
		],
	},
]);
