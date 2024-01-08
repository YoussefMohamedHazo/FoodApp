import {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const links = [
  {id:1,icon:<TbTruckDelivery size={25} className='mr-4'/>,text:"Orders"},
  {id:2,icon:<MdFavorite size={25} className='mr-4' /> ,text:"Favorites"},
  {id:3,icon:<FaWallet size={25} className='mr-4' /> ,text:"Wallet"},
  {id:4,icon:<MdHelp size={25} className='mr-4' /> ,text:"Help"},
  {id:5,icon:<AiFillTag size={25} className='mr-4' />  ,text:"Promotions"},
  {id:6,icon:<BsFillSaveFill size={25} className='mr-4' />  ,text:"Best Ones"},
  {id:7,icon:<FaUserFriends size={25} className='mr-4' />  ,text:"Invite Friends"},
]

const Navbar = () => {
  const [nav, setnav] = useState(false);
  return (
    <div className=' max-w-[1640px] mx-auto flex items-center justify-between p-4'>

      {/* left side */}
      <div className=' flex items-center'>
        <div className=' cursor-pointer'>
          <AiOutlineMenu onClick={ ()=>setnav(!nav)} size={30}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className='font-bold'>Eats</span>
        </h1>
        <div className=' hidden lg:flex items-center text-[14px] bg-gray-200 rounded-full p-1'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className=' bg-gray-200 flex items-center w-[200px] sm:w-[400px] lg:w-[500px] px-2  rounded-full'>
          <AiOutlineSearch size={25}/>
          <input type="text" placeholder='Search Food' className=' bg-transparent focus:outline-none w-full p-2' />
        
      </div>
      {/* card button */}
      
        <button className=' bg-black text-white hidden sm:flex items-center py-2 rounded-full'>
          
          <BsFillCartFill size={20} className='mr-2'/>
          Cart 
        </button>
      
      {/* mobil menu */}
      {/* overlay */}
      <div className={nav?' fixed bg-black/80 w-full h-screen top-0 left-0 z-40':''}></div>
      <div className={nav?' fixed bg-white w-[300px] h-screen left-0 top-0 duration-300 z-50':'fixed left-[-100%] duration-300'}>
        <AiOutlineClose onClick={ ()=>setnav(!nav)} size={30} className=' absolute right-4 top-4 cursor-pointer'/>
        <h2 className=' text-2xl p-4'>Best <span className=' font-bold'>Eats</span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                {links.map((link)=>{
                  const {id,icon,text} = link;
                  return <li className='text-xl py-4 flex' key={id}>{icon}{text}</li>
                })}
            </ul>
        </nav>
      </div>
    </div>
  )
}
export default Navbar