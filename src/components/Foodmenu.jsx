
const Foodmenu = ({allcategory,filterFoods}) => {
  console.log(allcategory)
  return (
    <div className=" flex justify-between items-center flex-wrap max-w-[700px]">
    {allcategory.map((category,index)=>{
      return <button onClick={()=>filterFoods(category)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' key={index}>{category}</button>
    })}
    </div>
  )
}
export default Foodmenu