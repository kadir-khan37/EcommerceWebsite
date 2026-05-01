import './App.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import man_banner2 from './assets/man_banner2.avif';
import women_banner_2 from './assets/women_banner_2.jpg';
import kidsbanner2 from './assets/kidsbanner2.jpg';
import ProtectedRoutes from './utils/protectedRoutes'
import Signup from './Pages/signup';

function App() {
  return (
    <>

      <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login />}/>
      
      <Route element={<ProtectedRoutes />}>
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Men' element={<ShopCategory banner={man_banner2} category="Men" />} />
        <Route path='/Women' element={<ShopCategory banner={women_banner_2} category="Women" />} />
        <Route path='/Kids' element={<ShopCategory banner={kidsbanner2} category="Kids" />} />
        <Route path='/Product/:ProductId' element={<Product/>} />
       
        <Route path='/Cart' element={<Cart />} />
      </Route>
      </Routes> 

      <Footer />
    </>
  );
}

export default App;
