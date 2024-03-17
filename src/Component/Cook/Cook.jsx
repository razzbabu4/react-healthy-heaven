import PropTypes from 'prop-types';
import SingleCook from "../SingleCook/SingleCook";
import CurrentlyCooking from '../CurrentlyCooking/CurrentlyCooking';

const Cook = ({ cookOrder, handleCurrentlyCooking, cooking, preparing_time, calories }) => {

    return (
        <div className="border-2 rounded-xl pb-20 col-span-4">
            <div className="text-center my-6 w-2/3 mx-auto">
                <h1 className="mb-2 text-2xl font-semibold">Want to Cook: {cookOrder.length}</h1>
                <div className="divider"></div>
            </div>
            <div className="mb-2 flex justify-around text-[#878787] font-medium">
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
            </div>
            <div>
                {
                    cookOrder.map((item, idx) => <SingleCook key={item.recipe_id} cookingBefore={item} index={idx} handleCurrentlyCooking={handleCurrentlyCooking}></SingleCook>)
                }
            </div>

            <div className="text-center my-6 w-2/3 mx-auto">
                <h1 className="mb-2 text-2xl font-semibold">Currently Cooking: {cooking.length}</h1>
                <div className="divider"></div>
            </div>
            <div className="mb-2">
                <div className="mb-2 flex justify-around text-[#878787]">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
                </div>
                <div>
                    {
                        cooking.map((item, idx) => <CurrentlyCooking key={item.recipe_id} cooking={item} index={idx}></CurrentlyCooking>)
                    }
                </div>

                <div className='float-end my-5 mr-4 pb-10 flex gap-5 text-[#282828CC] font-medium'>
                    <h3 className='flex flex-col items-center'>Total Time = <span>{preparing_time} minutes</span></h3>
                    <h3 className='flex flex-col items-center'>Total Calories = <span>{calories} calories</span></h3>
                </div>
            </div>

        </div>
    );
};
Cook.propTypes = {
    cookOrder: PropTypes.array,
    handleCurrentlyCooking: PropTypes.func,
    cooking: PropTypes.array,
    preparing_time: PropTypes.number,
    calories: PropTypes.number
}
export default Cook;