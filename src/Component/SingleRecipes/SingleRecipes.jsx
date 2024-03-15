
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
const SingleRecipes = () => {
    return (
        <div className="col-span-8 border-2 grid grid-cols-2 gap-6">

            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className="h-56 w-full m-6 rounded-xl" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="mx-6 mb-6">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <hr className="my-6" />
                    <h2>Ingredients: 6</h2>
                    <ul className="pl-6 list-none my-6">
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                    <div className="flex gap-5 mb-6">
                        <p className="flex items-center gap-2"><IoTimeOutline></IoTimeOutline> 30 minutes</p>
                        <p className="flex items-center gap-2"><AiOutlineFire></AiOutlineFire> 600 calories</p>
                    </div>
                    <button className="btn bg-[#0BE58A]">Want to Cook</button>
                </div>

            </div>
        </div>
    );
};

export default SingleRecipes;