import { useState , useEffect } from "react";
import Donation from "../../components/Donation/Donation";


const Donations = () => {
    const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const totalDonation = JSON.parse(localStorage.getItem("donations"));

    if (totalDonation) {
        setDonations(totalDonation);

      // const total = favoriteItems.reduce((preValue,currentItem)=> preValue + currentItem.price,0)

      // console.log(total);

      // setTotalPrice(total)


    } else {
      setNoFound("No Data Found");
    }
  }, []);

  console.log(donations);
    return (
        <div>
            <h2>Donation: {donations.length}</h2>
            <div>
                {
                  donations.map(donation =><Donation key={donation.id} donation={donation}></Donation> )  
                }
            </div>
        </div>
    );
};

export default Donations;