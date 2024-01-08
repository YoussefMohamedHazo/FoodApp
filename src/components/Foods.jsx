
import { useState } from 'react'
import { data } from '../data'
import Foodmenu from './Foodmenu'
import FoodCard from './FoodCard'
const allcatagory = ['all',...new Set(data.map((item)=>item.category))]
const Foods = () => {
  const [foods, setFoods] = useState(data)
  const [foodCatogry, setFoodCatgory] = useState(allcatagory) 

  const filterFoods = (category) => {
    if(category=='all'){
      setFoods(data);
      return
    }
    const newfoods = foods.filter((item)=>item.category === category)
    setFoods(newfoods)
  }
  
  
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      <div>
      <p className='font-bold text-gray-700'>Filter Type</p>
      <Foodmenu filterFoods={filterFoods} allcategory={foodCatogry}/>
      {/* display food  */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4' >
      {foods.map((item) => {
        return <FoodCard key={item.id} {...item}/>
      })}
      </div>
      </div>
    </div>
  )
}
export default Foods