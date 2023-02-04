import SiteHeader,{SiteFooter} from './CommonParts';
import {Item} from './Category.js'
function Home()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <section className="text-white bg-cover bg-center primary-overlay overlay-dense slider1" >
        <div className="overlay-content py-5">
          <div className="container py-4">
            <div className="swiper-container homepage-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide h-auto mb-5">
                  <div className="row gy-5 h-100 align-items-center">
                    <div className="col-lg-5 text-lg-end"><img className="ml-auto img-fluid" src="img/logo.png" alt="" />
                      <h1 className="text-uppercase">Multipurpose responsive theme</h1>
                      <ul className="list-unstyled text-uppercase fw-bold mb-0">
                        <li className="mb-2">Business. Corporate. Agency.</li>
                        <li>Portfolio. Blog. E-commerce.</li>
                      </ul>
                    </div>
                    <div className="col-lg-7"><img className="img-fluid" src="img/template-homepage.png" alt="" /></div>
                  </div>
                </div>
                <div className="swiper-slide h-auto mb-5">
                  <div className="row gy-5 h-100 align-items-center">
                    <div className="col-lg-7"><img className="img-fluid" src="img/template-mac.png" alt="" /></div>
                    <div className="col-lg-5">
                      <h1 className="text-uppercase">46 HTML pages full of features</h1>
                      <ul className="list-unstyled text-uppercase fw-bold mb-0">
                        <li className="mb-2">Sliders and carousels</li>
                        <li className="mb-2">4 Header variations</li>
                        <li className="mb-2">Google maps, Forms, Megamenu, CSS3 Animations and much more</li>
                        <li>+ 11 extra pages showing template features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide h-auto mb-5">
                  <div className="row gy-5 h-100 align-items-center">
                    <div className="col-lg-5 text-lg-end">
                      <h1 className="text-uppercase">Design</h1>
                      <ul className="list-unstyled text-uppercase fw-bold mb-0">
                        <li className="mb-2">Clean and elegant design</li>
                        <li className="mb-2">Full width and boxed mode</li>
                        <li className="mb-2">Easily readable Roboto font and awesome icons</li>
                        <li>7 preprepared colour variations</li>
                      </ul>
                    </div>
                    <div className="col-md-7"><img className="img-fluid" src="img/template-easy-customize.png" alt="" /></div>
                  </div>
                </div>
                <div className="swiper-slide h-auto mb-5">
                  <div className="row gy-5 h-100 align-items-center">
                    <div className="col-lg-7"><img className="img-fluid" src="img/template-easy-code.png" alt="" /></div>
                    <div className="col-lg-5">
                      <h1 className="text-uppercase">Easy to customize</h1>
                      <ul className="list-unstyled text-uppercase fw-bold mb-0">
                        <li className="mb-2">7 preprepared colour variations.</li>
                        <li>Easily to change fonts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-light"></div>
            </div>
          </div>
        </div>
        </section>
        <div className='section'>
          <div className='container py-4'>
            <div className='row'>
              <div className='col-12'>
                 <h3>Category</h3>
              </div>
            </div>
            <div className='row gy-5 align-items-stretch'>
              <Item id='1' title='Furr Coat' photo='img/product1.jpg' />   
              <Item id='2' title='Red Coat' photo='img/product2.jpg' />   
              <Item id='3' title='Blue Coat' photo='img/product3.jpg' />   
              <Item id='4' title='green Coat' photo='img/product4.jpg' />  
              <Item id='5' title='brown Coat' photo='img/product1.jpg' />   
              <Item id='6' title='cyan Coat' photo='img/product2.jpg' />   
              <Item id='7' title='grey Coat' photo='img/product3.jpg' />   
              <Item id='8' title='yellow Coat' photo='img/product4.jpg' /> 
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
}
export default Home