import { useEffect, useState } from "react";
import Cook from "../Cook/Cook";
import SingleRecipes from "../SingleRecipes/SingleRecipes";


const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);

    return (
        <div className="px-4 lg:px-24 my-4 lg:mt-20">
            <div className="text-center">
                <h1 className="text-4xl font-semibold">Our Recipes</h1>
                <p className="lg:w-2/3 mx-auto my-4 lg:my-8">A Feast for the Senses! Dive into our treasure trove of tantalizing recipes, curated for every palate. From savory classics to delectable desserts, embark on a culinary journey that will elevate your cooking skills and delight your taste buds.</p>
            </div>
            <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipes.map(item => <SingleRecipes key={item.recipe_id} recipes={item}></SingleRecipes>)
                }
                </div>
                <div>
                <Cook></Cook>
                </div>
            </div>

        </div>
    );
};

export default Recipes;