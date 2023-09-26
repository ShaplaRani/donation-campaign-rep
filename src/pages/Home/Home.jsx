// import { createContext, useState } from "react";
// import Donations from "../../components/Donations/Donations";
// import Banner from "../../components/Header/Banner/Banner";
// //  export const DonationContext = createContext();
//  import { useEffect, useState } from "react";
// import DonationCard from "./DonationCard";
// import { DonationContext } from "../../pages/Home/Home";
 import swal from 'sweetalert';

import { useEffect, useState } from "react";
import DonationCard from "../../components/DonationCard/DonationCard";


const Home = () => {
    const [donations,setDonations] = useState([]);
    const [display, setDisplay] = useState([])
    // useEffect( () => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then (data =>{
    //          setDonations(data)
    //          setDisplay(data)
    //         })
             
    // },[])
   

    // const [donations , setDonations] = useState([])
    // useEffect(() => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then (data =>  setDonations(data))
        
    //   },[])
    // const [filterDonation ,setFilterDonation] =useState("")
    const handleSubmit = e => {
        e.preventDefault();
       const  searchDonation = e.target.name.value;
       e.target.name.value ='';
    //    setFilterDonation(searchDonation);

       if(searchDonation  == "Food"){
        // setDisplayDonation(donations)
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
       
    //    setIsShow(true)
       
        
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

        <div className="hero h-[80vh]" 
        style={{backgroundImage: 'url(/src/assets/banner-img.jpg)'}}>
        <div className="hero-overlay bg-white bg-opacity-60"></div>
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
            {/* <DonationContext.Provider value= {[filterDonation ,setFilterDonation]} >
            <Banner ></Banner>
            {filterDonation?<Donations></Donations>:<Donations></Donations>}
            </DonationContext.Provider> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 m-auto mt-28 gap-6 mb-44">
           { 
               display.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>  )
         //    displayDonation.length !== 0?
         //    displayDonation.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
         //   :donations.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
           
              }
             </div>
             
             

        </div>
    );
};

export default Home;
{/* <DonationCard key={donation.id} donation ={donation}></DonationCard>) */}