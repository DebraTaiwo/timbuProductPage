import logo from '../assets/Idaralogo.png'
import profile from '../assets/profile.png'
import Shoppingbag from '../assets/shoppingbag.png'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'


const Header = () => {
    
 
  return (
    <div className='mt-0'>
        <div className='h-55 w-full bg-custom-rgba'>
            <div className='items-center text-white justify-items-center p-8 text-center text-tight'>Free shipping on orders over ₦60,000 | 30-day money-back guarantee
            </div>
        </div>
        <div className='bg-other-rgba h-66 w-full md:bg-transparent'>
            <div className='mx-10 flex justify-between md:mt-2 md:border-b '>
                <div className='hidden md:border w-60 md:py-1 md:rounded-full md:border-neutral-400 md:items-start md:mb-2 md:flex'>
                    <div className='hidden:sm flex gap-2 mx-5'><Search className='mt-1'size={18}/> Search</div></div>
            <div className='mr-20 lg:mr-40'>
                <img src={logo} alt="logo"/></div>
            <div className='flex font-semibold space-x-5'>
                <button><img className='h-5 w-5' src={profile} alt="image" /></button>
                <Link to = "/cart"><button><img className='h-5 w-5'src={Shoppingbag} alt="image" /></button></Link>
            </div>
            
            </div>
        </div>
      <div className='md:mt-5'>
        <ul className='hidden md:flex gap-10 items-center justify-center'>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Collections</a></li>
            <li><a href="#">Hair</a></li>
            <li><a href="#">Deals</a></li>
            <li><a href="#">Wholesales</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header
