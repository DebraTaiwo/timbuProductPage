import Header from '../components/Header'
import Footer from '../components/Footer'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const ThankyouPage = () => {
  return (
    <div className='mt-0 mb-0'>
        <Header/>
        <div className='mt-0 mb-0'>
            <div className='bg-cover bg-center bg-mobile-home h-[67px] md:h-[170px] md:mt-5'>
                <div className=' flex items-center justify-center h-full text-xl md:text-2xl'></div>
            </div>
            <div className='mt-20 items-center justify-center flex flex-col mx-5'>
            <div className="h-20 w-20 rounded-full items-center justify-center flex bg-custom-rgba text-white"><Check size={55}/></div>
            <h2 className='font-bold text-lg md:text-2xl mt-8 flex flex-col items-center justify-center'>Thank you for shopping with Timbu!</h2>
            <p className='mt-2'>We will send your receipt to your mail</p>
            <Link to ="/">
            <button className="mt-5 w-[150px] md:w-[250px] h-8 flex items-center justify-center bg-custom-rgba rounded-[12px] text-white text-sm md:text-md">
            Continue shopping</button>
            </Link>

            </div>

        </div>

        <Footer/>

      
    </div>
  )
}

export default ThankyouPage
