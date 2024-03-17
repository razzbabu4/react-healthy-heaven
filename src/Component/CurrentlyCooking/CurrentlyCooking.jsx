import PropTypes from 'prop-types';
const CurrentlyCooking = ({ cooking, index }) => {
    const { recipe_name, preparing_time, calories } = cooking;
    return (
        <div className='mb-2 flex justify-around items-center bg-[#28282808] text-[#878787] font-medium py-4'>
            <h3>{index + 1}</h3>
            <h3>{recipe_name.slice(0, 10)}</h3>
            <h3>{preparing_time} minutes</h3>
            <h3>{calories} calories</h3>
        </div>
    );
};

CurrentlyCooking.propTypes = {
    cooking: PropTypes.object,
    index: PropTypes.number
}
export default CurrentlyCooking;