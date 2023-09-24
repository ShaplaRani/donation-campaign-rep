import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const { Picture, Title, Category, Category_bg, Card_bg, Text_bg } = donation || {};
    return (
        <div className=' '>
            <div className="rounded-lg">
                <div className="">
                    <img className='w-full' src={Picture} alt="" />
                        
                </div>
                <div className="p-4 mt-5" style={{ backgroundColor: Card_bg }} >
            <div className='mb-3'>
             <p className='font-medium text-sm'>
                <span style={{ backgroundColor: Category_bg, color: Text_bg }}>{Category}</span></p>
            </div>
                    <p className='font-semibold text-xl' style={{ color:Text_bg  }}>{Title}</p>
                </div>

            </div>
        </div>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;
// relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none
// relative flex  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md