import SingleCard from "./SingleCard"

const Cards = () => {
  return (
    <div className=" max-w-[1640px] mx-auto p-4 grid md:grid-cols-3 py-12 gap-6">
      <SingleCard text1="Sun's Out, BOGO's Out" text2="Through 8/26" image='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'/>
      <SingleCard text1 ="New Restaurants" text2="Added Daily" image='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' />
      <SingleCard text1 ="We Deliver Desserts Too" text2="Tasty Treats" image='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' />
    </div>
  )
}
export default Cards