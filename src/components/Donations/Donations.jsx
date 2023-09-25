import { useContext, useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { DonationContext } from "../../pages/Home/Home";
import swal from 'sweetalert';

const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [displayDonation,setDisplayDonation] = useState([])
    const [filterDonation] = useContext(DonationContext)
     
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then (data => {
            setDonations(data)
            setDisplayDonation(data)
            
        })
    },[])
   
    if(filterDonation){
         if(filterDonation === "Food"){
            const foodDonation = donations.filter(donation => donation.Category == "Food")
            console.log(foodDonation); 
            setDisplayDonation(foodDonation);
         }
         else if(filterDonation === "Clothing"){
            const clothingDonation = donations.filter(donation => donation.Category == "Clothing") 
            setDisplayDonation(clothingDonation);
         }
         else if(filterDonation === "Education"){
            const educationDonation = donations.filter(donation => donation.Category == "Education") 
            setDisplayDonation(educationDonation);
         }
         else if(filterDonation === "Health"){
            const healthDonation = donations.filter(donation => donation.Category == "Health") 
            setDisplayDonation(healthDonation);
         }
         else{
            swal("Please insert a vailed input");
         }
       
    }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto mt-28 gap-6 mb-44">
           {
            displayDonation.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
           }
        </div>
    );
};

export default Donations;