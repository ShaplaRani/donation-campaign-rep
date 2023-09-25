import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const {id, Picture, Title, Category, Category_bg, Card_bg, Text_bg } = donation || {};
    return (
       <Link to= {`/donations/${id}`}>
        <div>
            <div className="rounded-lg   flex flex-col border border-red-400">
                <div className="">
                    <img className='w-full' src={Picture} alt="" />
                        
                </div>
                <div className="p-4 flex-grow" style={{ backgroundColor: Card_bg }} >
            <div className='mb-3'>
             <p className='font-medium text-sm'>
                <span className='py-2 px-3  rounded-lg' style={{ backgroundColor: Category_bg, color: Text_bg }}>{Category}</span></p>
            </div>
            <div className='flex-grow'>
                  <p className='font-semibold text-xl ' style={{ color:Text_bg  }}>{Title}</p>
           </div>
                </div>
                  <button className='bg-red-500 w-full'>serch</button>
               

            </div>
        </div>
        </Link> 
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;
// relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none
// relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md