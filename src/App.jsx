
import { useState } from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import Recipes from './Component/Recipes/Recipes';

function App() {
  const [cook, setCook] = useState([]);

  const handleWantToCook = (cookItem) => {
    const isExist = cook.find(item => item.recipe_id === cookItem.recipe_id);
    if(isExist){
      alert('exist')
    }
    else{
      setCook([...cook,cookItem])
    }
  }
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes handleWantToCook={handleWantToCook} cookOrders={cook}></Recipes>
    </>
  )
}

export default App
