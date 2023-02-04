import SiteHeader,{SiteFooter,PageHeading} from './CommonParts';
function ProductDetail()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <PageHeading  message='White blouse armani' />
      <section className="py-5">
        <div className="container py-4">
          <div className="row g-5">
            <div className="col-12">
              <p className="lead mb-4">Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it. Fat cannot use denied excuse son law. Wisdom happen suffer common the appear ham beauty her had. Or belonging zealously existence as by resources.</p>
              <div className="row gy-5 align-items-stretch">
                <div className="col-lg-6">
                    <img className="img-fluid" src="/img/detailbig1.jpg" alt="image not available" />
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-between">
                  <div className="p-4 p-lg-5 border mb-5 bg-light">
                    <form action="#">
                      <h3 className="text-center mb-3">Available sizes</h3>
                      <select className="form-select js-sizes mb-5" data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="x-large">X Large</option>
                      </select>
                      <p className="h1 text-muted mb-4 text-center fw-normal">$124.00</p>
                      <p className="text-center">
                        <button className="btn btn-outline-primary" type="submit"><i className="fas fa-shopping-cart"></i> Add to cart</button>
                        <button className="btn btn-secondary" type="submit" data-bs-toggle="tooltip" data-placement="top" title="Add to wishlist"><i className="far fa-heart"></i></button>
                      </p>
                    </form>
                  </div>
                    <h4>Product details</h4>
                    <p>White lace top, woven, has a round neck, short sleeves, has knitted lining attached</p>
                    <h4>Material &amp; care</h4>
                    <ul>
                      <li>Polyester</li>
                      <li>Machine wash</li>
                    </ul>
                    <h4>Size &amp; Fit</h4>
                    <ul className="mb-4">
                      <li>Regular fit</li>
                      <li>The model (height 5'8 "and chest 33") is wearing a size S</li>
                    </ul>
                </div>
              </div>
              <div id="details">
                <div className="py-4 border-top border-bottom text-center mb-5">
                  <h4 className="fw-light mb-3">Show it to your friends</h4>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item"><a className="social-link facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li className="list-inline-item"><a className="social-link twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="social-link youtube" href="#"><i className="fab fa-youtube"></i></a></li>
                    <li className="list-inline-item"><a className="social-link email" href="#"><i className="fas fa-envelope"></i></a></li>
                  </ul>
                </div>
              
              </div>
            </div>           
          </div>
        </div>
      </section>
        <SiteFooter />
      </div>
    );
}
export default ProductDetail