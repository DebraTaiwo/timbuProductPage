import Header from "../components/Header"
import { useState, useEffect } from "react"
import { X, HeartIcon, } from "lucide-react"
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product4 from '../assets/product4.png'
import product5 from '../assets/product5.png'
import product6 from '../assets/product6.png'
import product7 from '../assets/product7.png'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import Footer from "../components/Footer"
import { Link } from "react-router-dom"


const Productlistingpage = () => {
    const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Select only the buttons within the product listing
    const productButtons = document.querySelectorAll('.product-listing button');
    productButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });
    return () => {
        productButtons.forEach(button => {
            button.removeEventListener('click', openModal);
        });
    };
}, []);
  
  return (
    <div className="mt-0">
    <Header/>
    <div>
        <div className='bg-cover bg-center bg-mobile-home h-[67px] md:h-[170px] md:mt-5'>
        <div className=' flex items-center justify-center h-full text-xl md:text-2xl'>
            <h1 className='font-semibold'>Shop all your products</h1> 
        </div>
        </div>
      </div>
    
      <div className="flex mx-2 md:mx-20 mt-10 items-center justify-center mb-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 items-center justify-center product-listing">
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
                        <div className="items-right justify-end flex mt-2 mr-1 md:mr-3"><HeartIcon /></div>
                        <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product1} alt="image" /></div>
                        <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                            <p>Touch bright & Clear Cream | 150ml</p>
                            <p><strong>#12,000</strong></p>
                        </div>
                        <div className="flex justify-between mt-5">
                            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                                <p>-</p>
                                <p className="font-semibold text-lg">1</p>
                                <p>+</p>
                            </div>
                            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
                        </div>
        </div>
        <div className="border  h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product2} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Cosrx The Vitamin C 13 Serum | 60ml</p>
                <p><strong>#10,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product3} alt="image" /></div>
            <div className="flex gap-4 md:mt-4 mx-2 md:mx-5 text-sm md:text-md">
                <p>G. Niacinamide Brightening Toner | 120ml</p>
                <p><strong>#15,200</strong></p>
            </div>
            <div className="flex justify-between mt-2">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product4} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Cerave Foaming Cleanser | 473ml</p>
                <p><strong>#12,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border  h-[300px] w-[180px] md:w-[280px] rounded-lg">
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
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product6} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Good Skin Club Emulsion Gel | 30ml</p>
                <p><strong>#8,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product7} alt="image" /></div>
            <div className="flex gap-4 mt-2 mx-2 md:mx-5 text-sm md:text-md">
                <p>Tam Snail & Azulene Low pH | 150ml</p>
                <p><strong>#15,000</strong></p>
            </div>
            <div className="flex justify-between mt-5">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border  h-[300px] w-[180px] md:w-[280px] rounded-lg">
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
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product9} alt="image" /></div>
            <div className="flex gap-4 mt-2 md:mt-5 mx-2 md:mx-5 text-sm md:text-md">
                <p>Charbarl Charcoal Mask | 150g</p>
                <p><strong>#10,000</strong></p>
            </div>
            <div className="flex justify-between mt-2">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-3 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product10} alt="image" /></div>
            <div className="flex gap-4 md:mt-5 mx-2 md:mx-5 text-sm md:text-md">
                <p>The Ordinary AHA & BHA Peeling Solution | 60ml</p>
                <p><strong>#12,000</strong></p>
            </div>
            <div className="flex justify-between mt-2">
            <div className="flex mx-5 md:mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-3 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
            <div className="items-right justify-end flex mt-2 mr-3"><HeartIcon/></div>
            <div className="flex items-center justify-center"><img className="h-20 w-20 md:h-auto md:w-auto" src={product11} alt="image" /></div>
            <div className="flex gap-4 md:mt-5 mx-2 md:mx-5 text-sm md:text-md">
                <p>Clinique Wrinke Correcting Eye Serum | 50ml</p>
                <p><strong>#25,200</strong></p>
            </div>
            <div className="flex justify-between mt-2">
            <div className="flex mx-5 mt-5 gap-3 border-b border-neutral-400">
                <p>-</p>
                <p className="font-semibold text-lg">1</p>
                <p>+</p>
            </div>
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>
        <div className="border h-[300px] w-[180px] md:w-[280px] rounded-lg">
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
            <button className="px-4 py-1 md:px-10 md:py-2 items-center justify-center bg-custom-rgba rounded-[18px] mr-3 text-white text-sm md:text-md">Add to Cart</button>
            </div>
        </div>       

        </div>
        {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
                        <div className="bg-white rounded shadow-lg p-6 w-full md:w-[500px] h-full md:h-[500px] md:absolute md:top-10 md:right-10">
                            <div className="flex flex-row justify-between ">
                                <h2 className="text-lg font-bold mb-4">Cart(2) added!</h2>
                                <button onClick={closeModal}><X /></button>
                            </div>
                            <div className='flex flex-col gap-10 mt-3 mx-5'>
                                <div className='flex gap-3 md:gap-8 border-b border-neutral-300'>
                                    <img className='md:mt-0 h-15 w-20' src={product1} alt="products" />
                                    <div className="flex flex-col justify-between">
                                        <div className="flex justify-between gap-20">
                                            <p className='text-md'>Touch bright & Clear <br />Cream | 150ml</p>
                                            <X />
                                        </div>

                                        <div className="flex justify-between mb-2 mt-5">
                                            <p className='text-md'><strong>#12,000</strong></p>
                                            <div className="flex gap-5 border-b border-neutral-400">
                                                <p>-</p>
                                                <p className="font-semibold text-sm">1</p>
                                                <p>+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex md:mx-5 gap-3 md:gap-8 border-b border-neutral-300'>
                                    <img className='md:mt-0 h-15 w-20' src={product2} alt="products" />
                                    <div className="flex flex-col justify-between">
                                        <div className="flex justify-between gap-20">
                                            <p className='text-md'>Cosrx The Vitamin C <br />13 Serum | 60ml</p>
                                            <X />
                                        </div>

                                        <div className="flex justify-between mb-5 mt-5">
                                            <p className='text-md'><strong>#10,000</strong></p>
                                            <div className="flex gap-5 border-b border-neutral-400">
                                                <p>-</p>
                                                <p className="font-semibold text-sm">1</p>
                                                <p>+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 mx-5 flex justify-between">
                                <p>Subtotal</p>
                                <p><strong>#22,000</strong></p>
                            </div>
                            <div className="items-center justify-center flex flex-col md:flex-row gap-3 md:gap-3 mt-28 mb-20 md:mt-10 md:mb-5">
                                <Link to="/cart">
                                    <button className="px-24 md:px-20 py-1 border border-custom-border text-sm text-custom-text rounded-lg">
                                        View cart
                                    </button>
                                </Link>
                                <Link to="/checkout">
                                    <button className="px-24 md:px-20 py-1 border border-custom-border bg-custom-rgba text-sm text-white rounded-lg">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
        
      </div>

      
      <Footer/>
    </div>
  )
}

export default Productlistingpage
