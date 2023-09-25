import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const DonationDetails = () => {
    const [donation, setDonation] =useState({});
    const {Picture,Price,Title,Description, Text_color} =donation || {};
     const {donationId} =useParams();
     const id = parseInt(donationId);
     const donations = useLoaderData();
     
     const handleAddToDonation = () => {
        const addedDonationArray = [];
    
        const storedDonation = JSON.parse(localStorage.getItem("donations"));
    
        //jokhon kisu nai tokhon e if vitor dhukba
        if (!storedDonation) {
            addedDonationArray.push(donation);
          localStorage.setItem("donations", JSON.stringify(addedDonationArray));
          swal("Good job!", "Donation added successfully!", "success");
        } 
        
        else {
    
    
          const isExits = storedDonation.find((donation) => donation.id === id);
    
          
          if (!isExits) {
    
            addedDonationArray.push(...storedDonation, donation);
            localStorage.setItem("donations", JSON.stringify(addedDonationArray));
            swal("Good job!", "Donation added successfully!", "success");
           
          } else {
            swal("Error!", "No duplicate !", "error");
          }
    
        
    
    
        }
    }  
    
     useEffect(() => {
        const findDonation = donations.find(donation => donation.id === id);
        setDonation(findDonation)
    },[id, donations]);
   
    return (
        <div className="w-10/12 m-auto">
            <img className="  w-full h-[80vh]" src={Picture} alt="" />
            <div onClick={handleAddToDonation} className="">
            <button style={{ backgroundColor: Text_color }} className=" py-4 px-6 rounded-lg font-semibold text-xl text-white">
              Donate ${Price}
              </button>
            </div>
            <h2 className="font-bold text-4xl text-black">{Title}</h2>
            <p className="font-normal text-base text-gray-500 mt-6 mb-28">{Description}</p>
        </div>
    );
};

export default DonationDetails;