import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CommonParts'
import SiteHeader,{SiteFooter} from './CommonParts';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.js'
import Category from './Category.js'
import Product from './Product.js'
import ProductDetail from './ProductDetail.js'
import Checkout from './Checkout.js'
import Cart from './Cart.js'
import LoginRegister from './LoginRegister.js'
import Users from './admin/users.js'
import AdminCategory from './admin/categories.js'
import AdminProduct from './admin/products.js'
import Orders from './admin/orders.js'
import AdminLogin from './admin/adminlogin.js'

function MySiteRouter()
{
  return(
    <BrowserRouter>
      <Routes>
          {/* guest/register user(buyers) */}
          <Route path='/' element={<Home />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/products/:categoryid' element={<Product />}></Route>
          <Route path='/productsdetail/:productid' element={<ProductDetail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/login_register' element={<LoginRegister />}></Route>

          {/* Admin Routes */}
          <Route path='/admin/users' element={<Users />}></Route>
          <Route path='/admin/categories' element={<AdminCategory />}></Route>
          <Route path='/admin/products' element={<AdminProduct />}></Route>
          <Route path='/admin/orders' element={<Orders />}></Route>
          <Route path='/admin/login' element={<AdminLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
function Page()
{
    return(
      <div className='wide' id='all'>
        <SiteHeader />
        <div className='container'><h1>Hello world</h1></div>
        <SiteFooter />
      </div>
    )
}
root.render(<MySiteRouter  />);
