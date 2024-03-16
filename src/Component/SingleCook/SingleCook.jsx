import PropTypes from 'prop-types';
const SingleCook = ({cooking, index}) => {
    const {recipe_name, preparing_time,calories} = cooking;
    return (
        <div className='mb-2 flex justify-around items-center bg-slate-200 py-4 px-2'>
            <h3>{index + 1}</h3>
            <h3>{recipe_name.slice(0,10)}</h3>
            <h3>{preparing_time}</h3>
            <h3>{calories}</h3>
            <button className='btn bg-[#0BE58A] p-2 rounded-full'>Preparing</button>
        </div>
    );
};

SingleCook.propTypes = {
    cooking: PropTypes.object,
    index: PropTypes.number
}
export default SingleCook;