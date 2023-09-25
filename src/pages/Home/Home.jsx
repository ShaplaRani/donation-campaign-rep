import { createContext, useState } from "react";
import Donations from "../../components/Donations/Donations";
import Banner from "../../components/Header/Banner/Banner";
 export const DonationContext = createContext();

const Home = () => {
    const [filterDonation ,setFilterDonation] =useState("")
    return (
        <div>
            <DonationContext.Provider value= {[filterDonation ,setFilterDonation]} >
            <Banner></Banner>
            <Donations></Donations>
            </DonationContext.Provider>
        </div>
    );
};

export default Home;