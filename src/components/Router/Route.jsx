import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../../pages/Home/Home";
import DonationDetails from "../../pages/DonationDetails/DonationDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import Donations from "../../pages/Donation/Donations";
import Statistics from "../../pages/Statistics/Statistics";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/donation",
                element:<Donations></Donations>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>

            },
            {
                path:"/donations/:donationId",
                loader: () => fetch('data.json'),
                element:<DonationDetails></DonationDetails>
            }
        ]
    }
])

export default myCreatedRoute;