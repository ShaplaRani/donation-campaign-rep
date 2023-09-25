import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donations = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then (data => setDonations(data))
    },[])
    console.log(donations);
    return (
        <div className="grid grid-cols-4 w-10/12 m-auto mt-28 gap-6 mb-44">
           {
            donations.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
           }
        </div>
    );
};

export default Donations;