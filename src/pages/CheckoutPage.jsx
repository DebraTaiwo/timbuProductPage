import Header from '../components/Header'
import { useState } from 'react';
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        emailAddress: '',
        firstName:'',
        lastName:'',
        address: '',
        country: '',
        state: '',
        phoneNumber: ''

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <div className='mt-0 mb-0'>
        <Header/>
        <div className='mb-0 mt-0'>
        <div className='bg-cover bg-center bg-mobile-home h-[67px] md:h-[170px] md:mt-5'>
        <div className=' flex items-center justify-center h-full text-xl md:text-2xl'>
            <h1 className='font-semibold'>Checkout</h1> 
        </div>
        </div>

        <div className='flex flex-col xl:flex-row mt-10 mx-5 xl:mx-20'>
      <div className="flex items-center justify-center">
      <form className="bg-white p-8 w-full max-w-lg" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold mb-2">Billing Details</h2>
        <p className='mb-5'>Carefully Input the appropriate details in its appropriate place below.  </p>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-[12px]"
            placeholder="Input your email"
          />
        </div>

        <div className='flex flex-col xl:flex-row gap-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full xl:w-[220px] px-3 py-2 border rounded-lg text-[12px]"
            placeholder="first name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full xl:w-[220px] px-3 py-2 border rounded-lg text-[12px]"
            placeholder="last name"
          />
        </div>
        </div>
        

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">Address</label>
          <input
            type="email"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-[12px]"
            placeholder="Address"
          />
        </div>

        <div className='flex flex-col xl:flex-row gap-2'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">Country</label>
          <input
            type="text"
            name="firstName"
            value={formData.country}
            onChange={handleChange}
            className="w-full xl:w-[220px] px-3 py-2 border rounded-lg text-[12px]"
            placeholder="country"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">State</label>
          <input
            type="text"
            name="lastName"
            value={formData.state}
            onChange={handleChange}
            className="w-full xl:w-[220px] px-3 py-2 border rounded-lg text-[12px]"
            placeholder="state"
          />
        </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold pb-2">Phone Number</label>
          <input
            type="email"
            name="emailAddress"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg text-[12px]"
            placeholder="phone number"
          />
        </div>

      </form>
    </div>
    <div className='xl:mt-[150px] flex flex-col items-center justify-center md:mx-20'>
    <div className='bg-other-rgba w-[320px] h-[450] md:w-[450px] rounded-lg' >
            <h2 className='text-xl font-bold items-center justify-center flex mt-2 border-b border-neutral-500 py-3 mx-10'>Your Order</h2>
            <div className='flex flex-col gap-3 mt-3 mx-5'>
                <div className='bg-white rounded-lg h-[120px] md:h-20 w-90 flex md:mx-5 gap-3  md:gap-8'>
                    <img className='mt-5 md:mt-0 h-15 w-20' src={product1} alt="products" />
                    <div>
                        <p className='sm:text-[8px] md:text-[12px] mt-2'>Touch bright & Clear Cream | 150ml</p>
                        <p className='sm:text-[8px] md:text-[12px]'><strong>#12,000</strong></p>
                        <p className='sm:text-[8px] md:text-[12px]'>Qty: 1</p>
                    </div>

                </div>
                <div className='bg-white rounded-lg h-[120px] md:h-20 w-90 flex md:mx-5 gap-3 md:gap-8'>
                    <img className='mt-5 md:mt-0 h-15 w-20' src={product2} alt="products" />
                    <div>
                        <p className='text:[10px] md:text-[12px] mt-2'>Cosrx The Vitamin C 13 Serum | 60ml</p>
                        <p className='text:[10px] md:text-[12px]'><strong>#10,000</strong></p>
                        <p className='text:[10px] md:text-[12px]'>Qty: 1</p>
                    </div>

                </div>
            </div>
            <div className='flex flex-col border-b border-neutral-500 py-5'>
                <div className='flex justify-between items-justify'>
                    <p className='ml-5 text-sm'>Subtotal</p>
                    <p className='mr-5 text-sm'><strong>#22,000</strong></p>
                </div>
                <div className='flex justify-between items-justify'>
                    <p className='ml-5 text-sm'>Shipping fee</p>
                    <p className='mr-5 text-sm'><strong>#4,000</strong></p>
                </div>
                <div className='flex justify-between items-justify'>
                    <p className='ml-5 text-sm'>Transaction fee</p>
                    <p className='mr-5 text-sm'><strong>#300</strong></p>
                </div>
                
            </div>
            <div className='flex justify-between py-3'>
                <p className='ml-5 font-bold'>Total</p>
                <p className='mr-5'><strong>#16,300</strong></p>
            </div> 
        </div>
        <div className='mt-10 items-center justify-center flex flex-col'>
          <Link to ="/thankyou">
            <button className="w-[200px] lg:w-[400px] h-10 flex items-center justify-center bg-custom-rgba rounded-lg text-white text-sm md:text-md">
            Pay Now</button>
            </Link>
        <p className='mt-5 mb-10 mx-5'>We accept every and any type of payment; Bank transfer, Debit/Credit cards, USSD</p>
        </div>
        
        
        </div>

      </div>

        </div>
        <Footer/>    
      
    </div>
  )
}

export default CheckoutPage
