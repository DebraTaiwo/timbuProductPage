import Header from '../components/Header'
import Footer from '../components/Footer'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import { X } from 'lucide-react'
import product8 from '../assets/product8.png'
import { HeartIcon } from "lucide-react"
import product9 from '../assets/product9.png'
import product12 from '../assets/product12.png'
import product5 from '../assets/product5.png'
import { Link } from 'react-router-dom'

const CartPages = () => {
  return (
    <div className='mt-0 mb-0'>
        <Header/>
        <div className='mt-0 mb-0'>
        <div className='bg-cover bg-center bg-mobile-home h-[67px] md:h-[170px] md:mt-5'>
        <div className=' flex items-center justify-center h-full text-xl md:text-2xl'>
            <h1 className='font-semibold'>Cart (2)</h1> 
        </div>
      </div>
      <div className='mt-20 flex flex-col md:flex-row border-b border-neutral-200'>
        <div>
        <div className='grid grid-cols-3 gap-5 mx-5 md:mx-20 border-neutral-400 border-b mb-10'>
            <img className='h-20 w-20' src={product1} alt="image" />
            <div>
                <p>Touch bright & Clear Cream  | 150ml</p>
                <p><strong>#12,000</strong></p>
                <div className="flex mt-5 gap-3 border-b border-neutral-400 w-20 mb-5">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            </div>
            <X/>        
        </div>
        <div className='grid grid-cols-3 gap-5 md:mx-20 border-neutral-400 border-b mb-10'>
            <img className='h-20 w-20' src={product2} alt="image" />
            <div>
                <p>Cosrx The Vitamin C 13 Serum | 60ml</p>
                <p><strong>#10,000</strong></p>
                <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400 w-20 mb-5">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            </div>
            <X/>        
        </div>
        </div>
        <div className='bg-other-rgba h-60 w-60 mx-20 rounded-lg mb-5'>
            <h2 className='text-2xl font-bold items-center justify-center flex mt-2 border-b border-neutral-800 py-3'>Order Summary</h2>
            <div className='flex border-b border-neutral-800 justify-between py-3'>
                <p className='ml-5'>Subtotal</p>
                <p className='mr-5'><strong>#22,000</strong></p>
            </div>
            <div className='flex justify-between py-3'>
                <p className='ml-5'>Total</p>
                <p className='mr-5'><strong>#22,000</strong></p>
            </div>
            <Link to ="/checkout">
            <button className='bg-custom-rgba w-48 h-10 text-white flex justify-center items-center mx-5 mt-5 rounded-[12px]'>Checkout</button>
            </Link>
            
        </div>
      </div>
      <div>
        <h1 className='mx-5 md:mx-20 mt-5 text-lg font-bold'>You may also like</h1>
      <div className='mx-2 md:mx-20 mt-10 items-center justify-center mb-10 '>
        <div className='overflow-x-scroll md:overflow-x-auto flex flex-row md:grid md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-5 items-center justify-center '>
        <div className="flex-shrink-0 border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product8} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Balance Vit.C Glow & Radiance Serum | 30ml</p>
                <p><strong>#10,000</strong></p>
            </div>
            <div className="flex justify-between md:mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-3 py-1 md:px-8 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="flex-shrink-0 border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product12} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Curology Foaming Cleanser | 273ml</p>
                <p><strong>#12,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-3 py-1 md:px-8 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>  
        <div className="flex-shrink-0 border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product9} alt="image" /></div>
            <div className="flex gap-4 mt-2 md:mt-5 mx-2 md:mx-5 text-sm md:text-md">
                <p>Charbarl Charcoal Mask | 150g</p>
                <p><strong>#10,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-3 py-1 md:px-8 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="flex-shrink-0 border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product5} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>LRP Double Gel Moisturizer | 400ml</p>
                <p><strong>#22,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-3 py-1 md:px-8 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        </div>
      </div>
      </div>

        </div>
        
        

        <Footer/>
      
    </div>
  )
}

export default CartPages
