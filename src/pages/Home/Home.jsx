
 import swal from 'sweetalert';

import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";


const Home = () => {
    const [donations,setDonations] = useState([]);
    const [display, setDisplay] = useState([])
    
    const handleSubmit = e => {
        e.preventDefault();
       const  searchDonation = e.target.name.value;
       e.target.name.value ='';
    

       if(searchDonation  == "Food"){
        
        const foodDonation = donations.filter(donation => donation.Category == "Food")
        console.log(foodDonation); 
        setDisplay(foodDonation);
     }
     else if(searchDonation  == "Clothing"){
        const clothingDonation = donations.filter(donation => donation.Category == "Clothing") 
        setDisplay(clothingDonation);
     }
     else if(searchDonation   == "Education"){
        const educationDonation = donations.filter(donation => donation.Category == "Education") 
        setDisplay(educationDonation);
     }
     else if(searchDonation  == "Health"){
        const healthDonation = donations.filter(donation => donation.Category == "Health") 
        setDisplay(healthDonation);
     }
     else{
        swal("Please insert a valid input");
     }
       
    }
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then (data =>{
             setDonations(data)
             setDisplay(data)
            })
             
    },[])
    return (
        <div>

        <div className="hero h-[80vh] pt-[-150px]" 
        style={{backgroundImage: 'url(/images/banner-img.jpg)'}}>
        <div className="hero-overlay bg-white bg-opacity-95"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl text-black mb-10">I Grow By Helping People In Need</h2>
            
              <form onSubmit={handleSubmit} action="">
               <input className="border border-inherit p-4 rounded-s-lg md:w-[400px] text-black " type="text" name="name" id=""placeholder="Search here...." />
               <input className="bg-red-500 font-semibold text-base rounded-e-lg text-white py-4 px-6"
                  type="submit" value="Search" />
               </form>
          </div>
        </div>
        </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto mt-28 gap-6 mb-44">
           { 
               display?.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>  )
         
           }
         </div>
             
      </div>
    );
};

export default Home;
