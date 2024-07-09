import {BrowserRouter, Route, Routes } from 'react-router-dom/'
import Productlistingpage from './pages/Productlistingpage'
import CartPages from './pages/CartPages'
import CheckoutPage from './pages/CheckoutPage'
import ThankyouPage from './pages/ThankyouPage'

const App = () => {
  return (
    <div>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Productlistingpage />} />
          <Route path="/cart" element={<CartPages/>} />
           <Route path="/checkout" element={<CheckoutPage />} />
           <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
        </BrowserRouter>
  </div>
  )
}

export default App







