import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donation }) => {
    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_color } = donation || {};
    return (
        <Link to={`/donations/${id}`}>

            <div className="rounded-lg ">
                <div className="rounded-lg">
                    <img className='w-full' src={Picture} alt="" />

                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: Card_bg }} >
                    <div className='mb-3'>
                        <p className='font-medium text-sm'>
                            <span className='py-2 px-3  rounded-lg'
                                style={{ backgroundColor: Category_bg, color: Text_color }}>{Category}</span></p>
                    </div>
                    <div className='flex-grow'>
                        <p className='font-semibold text-xl ' style={{ color: Text_color }}>{Title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
DonationCard.propTypes = {
    donation: PropTypes.object
}
export default DonationCard;
