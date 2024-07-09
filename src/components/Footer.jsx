import logo from '../assets/Idaralogo.png'




const Footer = () => {
  return (
    <footer className='mt-20 border-neutral-400 bg-other-rgba mb-0'>
        
            <div className='items-justify md:items-center justify-normal md:justify-center md:text-center flex flex-col mx-10 md:mx-20'>
                <img className='mt-10 h-12 w-12' src={logo} alt="image" />
                <p className='text-sm w-auto mb-10 max-w-xl'>At Timbu, we bring together the finest skincare products from trusted brands to offer you personalized regimens that celebrate your unique skin. Our commitment is to help you achieve radiant, healthy skin through high-quality products, and a deep understanding of your skincare needs.</p>
                <p className='mb-10 text-sm'>2024 Timbu.co. All Right Reserved</p>
            </div>
            
      
    </footer>
  )
}

export default Footer
