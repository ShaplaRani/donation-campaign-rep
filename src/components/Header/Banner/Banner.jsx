
import { useContext } from "react";
import { DonationContext } from "../../../pages/Home/Home";
import { Link } from "react-router-dom";




const Banner = () => {
    const [ filterDonation, setFilterDonation] = useContext(DonationContext)
    console.log(typeof setFilterDonation)
     //console.log(filterDonation );
    // const [displayDonation, setDisplayDonation] =useState('');
    // const [isShow , setIsShow] = useState(false)
    const handleSubmit = e => {
        e.preventDefault();
       const  searchDonation = e.target.name.value;
       setFilterDonation(searchDonation);
    //    setIsShow(true)
       
      //  e.target.name.value ='';
    }
    //  console.log(displayDonation);
    return (
        <div className="hero h-[80vh]" 
        style={{backgroundImage: 'url(/src/assets/banner-img.jpg)'}}>
        <div className="hero-overlay bg-white bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
          <h2 className="font-bold text-xl md:text-3xl lg:text-5xl text-black mb-10">I Grow By Helping People In Need</h2>
            
                   <form onSubmit={handleSubmit} action="">
                      <input className="border border-inherit p-4 rounded-s-lg md:w-[400px] " type="text" name="name" id=""placeholder="Search here...." />
                      <input className="bg-red-500 font-semibold text-base rounded-e-lg text-white py-4 px-6"
                      type="submit" value="Search" />
                    </form>
          </div>
        </div>
      </div>

        // <div className="text-center  py-52 bg-cover   bg-[url('/src/assets/banner-img.jpg')]">
             
             
        //      <h2 className="font-bold text-5xl text-black mb-10">I Grow By Helping People In Need</h2>
            
        //         <form onSubmit={handleSubmit} action="">
        //           <input className="border border-inherit p-4 rounded-s-lg w-[400px] " type="text" name="name" id=""placeholder="Search here...." />
        //           <input className="bg-red-500 font-semibold text-base rounded-e-lg text-white py-4 px-6"
        //            type="submit" value="Search" />
        //         </form>
           
            
        
          
        // </div>
    );
};

export default Banner;
