import PropTypes from 'prop-types';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const SingleRecipes = ({ recipes, handleWantToCook }) => {
    const {recipe_image, recipe_name, short_description, preparing_time, calories, ingredients } = recipes;
    return (
        <div>

            <div className="card h-full w-full bg-base-100 border shadow-xl">
                <figure><img className="h-56 w-full m-6 rounded-xl" src={recipe_image} alt="recipe" /></figure>
                <div className="mx-6 mb-6">
                    <h2 className="card-title mb-2">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <hr className="my-4" />
                    <h2 className='font-semibold'>Ingredients: {ingredients.length}</h2>
                    <ul className="pl-6 list-disc my-4 text-[#150B2B99]">
                        {
                            ingredients.map((ingredient, idx) => <li key={idx}>{ingredient}</li>).slice(0, 3)
                        }
                    </ul>
                    <hr className="my-4" />
                    <div className="flex gap-5 mb-6">
                        <p className="flex items-center gap-2"><IoTimeOutline></IoTimeOutline> {preparing_time} minutes</p>
                        <p className="flex items-center gap-2"><AiOutlineFire></AiOutlineFire> {calories}</p>
                    </div>
                    <button onClick={() => handleWantToCook(recipes)} className="btn bg-[#0BE58A]">Want to Cook</button>
                </div>

            </div>
        </div>
    );
};

SingleRecipes.propTypes = {
    recipes: PropTypes.object.isRequired,
    handleWantToCook: PropTypes.func

}
export default SingleRecipes;