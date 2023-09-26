import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Donation = ({donation}) => {
    const {id,Picture, Title, Category, Category_bg, Card_bg, Text_color ,Price } = donation || {};
    return (
    <div className="relative  md:flex flex-row   bg-white  text-gray-700 rounded-lg ">
  <div className="relative m-0 md:w-2/5 shrink-0 overflow-hidden md:rounded-s-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Picture}

      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div style={{  backgroundColor:Card_bg}} className="p-6 rounded-e-lg flex-1 " >
   
        <p className='font-medium text-sm'>
        <span className='py-2 px-3  rounded-lg' style={{ backgroundColor: Category_bg, color: Text_color }}>{Category}</span>
        </p>
   
       <p className='font-semibold text-xl mt-3 mb-2' >{Title}</p>
       <div className='mb-4 font-semibold text-base '>
            <p  style={{ color:Text_color}}>${Price}</p>
       </div>
       <Link to={`/donations/${id}`}>
       <button style={{ backgroundColor: Text_color }} className=" py-4 px-6 rounded-lg font-semibold text-lg text-white">
       View Details
        </button>
        </Link>
     
   </div>
  </div>
);
};

Donation.propTypes = {
    donation: PropTypes.object
}
export default Donation;

