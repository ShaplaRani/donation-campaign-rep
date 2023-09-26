import { useState , useEffect } from "react";
import Donation from "../../components/Donation/Donation";

const Donations = () => {
    const [donations, setDonations] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [dataLength,setDataLength] = useState(4)

  useEffect(() => {
    const totalDonation = JSON.parse(localStorage.getItem("donations"));

    if (totalDonation) {
        setDonations(totalDonation);

      } else {
      setNoFound("No Data Found");
    }
  }, []);

  
    return (
        <div className="w-10/12 m-auto mb-20  mt-9">
            
             <div>
              {noFound? (
              <p className=" text-4xl font-semibold text-center mt-40"> {noFound}</p>):(
             <div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                {
                  donations.length <= 4?
                  donations?.map(donation =><Donation key={donation.id} donation={donation}></Donation> )  
                  :donations?.slice(0,dataLength).map(donation =><Donation key={donation.id} donation={donation}></Donation> )
                }
            </div>
            <div className={` flex justify-center mt-10 ${ donations.length === dataLength || donations.length <= 4 ? "hidden":""}`}>
                <button onClick={() => setDataLength(donations.length)}
                 className=" bg-green-700 text-white py-4 px-7 rounded-lg font-semibold text-base">
                     See All 
                </button>
            </div>
            </div>)
          }
        </div>
        </div>
    );
};

export default Donations;