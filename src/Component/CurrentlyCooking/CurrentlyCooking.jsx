
const CurrentlyCooking = ({cooking, index}) => {
    const { recipe_name, preparing_time, calories } = cooking;
    return (
        <div className='mb-2 flex justify-around items-center bg-[#28282808] text-[#878787] font-medium py-4'>
            <h3>{index + 1}</h3>
            <h3>{recipe_name.slice(0, 10)}</h3>
            <h3 className='flex flex-col items-center'> {preparing_time} <span>minutes</span></h3>
            <h3 className='flex flex-col items-center'>{calories} <span>calories</span></h3>
        </div>
    );
};

export default CurrentlyCooking;