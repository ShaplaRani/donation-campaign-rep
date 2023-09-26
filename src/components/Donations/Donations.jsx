import { useContext, useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import { DonationContext } from "../../pages/Home/Home";
import swal from 'sweetalert';


const Donations = () => {
   
   const [donations , setDonations] = useState([])
   //  const [displayDonation,setDisplayDonation] = useState([])
    const [filterDonation] = useContext(DonationContext)
    console.log(filterDonation); 
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then (data =>  setDonations(data))
        
      },[])
  
    if(filterDonation){
         if(filterDonation === "Food"){
            // setDisplayDonation(donations)
            const foodDonation = donations.filter(donation => donation.Category == "Food")
            console.log(foodDonation); 
            setDonations(foodDonation);
         }
         else if(filterDonation === "Clothing"){
            const clothingDonation = donations.filter(donation => donation.Category == "Clothing") 
            setDonations(clothingDonation);
         }
         else if(filterDonation === "Education"){
            const educationDonation = donations.filter(donation => donation.Category == "Education") 
            setDonations(educationDonation);
         }
         else if(filterDonation === "Health"){
            const healthDonation = donations.filter(donation => donation.Category == "Health") 
            setDonations(healthDonation);
         }
         else{
            swal("Please insert a valid input");
         }
       
    }
//     useEffect(() => {
//       fetch('data.json')
//       .then(res => res.json())
//       .then (data => {
//           setDonations(data)
//           setDisplayDonation(data)
          
//       })
//   },[])
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto mt-28 gap-6 mb-44">
           { 
               donations.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
         //    displayDonation.length !== 0?
         //    displayDonation.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
         //   :donations.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
           
         }
        </div>
    );
};

export default Donations;

