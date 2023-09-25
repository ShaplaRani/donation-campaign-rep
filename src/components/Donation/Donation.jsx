
import PropTypes from 'prop-types';
const Donation = ({donation}) => {
    const {Picture, Title, Category, Category_bg, Card_bg, Text_bg ,Price } = donation || {};
    return (
    <div className="relative flex  flex-row  bg-white  text-gray-700 rounded-lg ">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Picture}

      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6  bg-red-300  rounded-e-lg flex-1 space-y-4" >
   
        <p className='font-medium text-sm'>
        <span className='py-2 px-3  rounded-lg' style={{ backgroundColor: Category_bg, color: Text_bg }}>{Category}</span>
        </p>
   
       <p className='font-semibold text-xl ' style={{ color:Text_bg  }}>{Title}</p>
   
      
      <p>${Price}</p>
   
     <button className='font-semibold text-lg text-white'>View Details</button>
  </div>
      </div>


        // <div classNameName='flex'>
        //     <div>
        //         <img src={Picture} alt="" />
        //     </div>
        //     <div classNameName="p-4" style={{ backgroundColor: Card_bg }} >
        //     <div classNameName='mb-3'>
        //      <p classNameName='font-medium text-sm'>
        //         <span classNameName='py-2 px-3  rounded-lg' style={{ backgroundColor: Category_bg, color: Text_bg }}>{Category}</span></p>
        //     </div>
        //     <div classNameName=''>
        //           <p classNameName='font-semibold text-xl ' style={{ color:Text_bg  }}>{Title}</p>
        //    </div>
        //     <div classNameName=''>
        //        <p>${Price}</p>
        //     </div>
        //     <button classNameName='font-semibold text-lg text-white'>View Details</button>
        // </div>
        // </div>
    );
};

Donation.propTypes = {
    donation: PropTypes.object
}
export default Donation;

