import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Products from './Products'
import SingleProduct from './SingleProducts'
import NewProduct from './NewProduct'
import Services from './Services'
import Layout from './Layout';
import PriorityLayout from './PriorityLayout';
import NoPage from './NoPage'
// function RouteExample1()
// {
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route path='/' element={<Home />}></Route>
//           <Route path='/aboutus' element={<AboutUs />}></Route>
//           <Route path='/contactus/:mobile/:email' element={<ContactUs />}></Route>
//           <Route path='/product' element={<Products />}></Route>
//           <Route path='/services' element={<Services />}></Route>
//           <Route path='*' element={<NoPage />}></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
function RoutesWithPriority()
{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PriorityLayout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/product' element={<Products />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/product/new' element={<NewProduct />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RoutesWithPriority />);

