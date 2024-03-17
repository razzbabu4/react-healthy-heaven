import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Recipes from './Component/Recipes/Recipes';

function App() {
  const [cook, setCook] = useState([]);
  const [cooking, setCooking] = useState([]);

  const handleWantToCook = (cookItem) => {
    const isExist = cook.find(item => item.recipe_id === cookItem.recipe_id);
    if (isExist) {
      toast("Already Recipe Added")
    }
    else {
      setCook([...cook, cookItem])
    }
  }

  const handleCurrentlyCooking = (currentCooking, recipe_id) => {
    // console.log('clicked preparing', currentCooking)
    setCooking([...cooking, currentCooking]);

    const remainingOrder = cook.filter(item => item.recipe_id !== recipe_id);
    setCook(remainingOrder);
  }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes handleWantToCook={handleWantToCook} cookOrders={cook} handleCurrentlyCooking={handleCurrentlyCooking} cooking={cooking}></Recipes>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
