

const SingleCard = ({text1,text2,image}) => {
  return (
    <div className=" relative rounded-xl">
      {/* overlay */}
      <div className=" absolute w-full h-full bg-black/50 text-white rounded-xl">
      <p className='font-bold text-2xl px-2 pt-4'>{text1}</p>
          <p className='px-2'>{text2}</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
      </div>
      <img className="w-full max-h-[160px] md:max-h-[200px] object-cover rounded-xl"   src={image}
          alt='/' />
    </div>
  )
}
export default SingleCard