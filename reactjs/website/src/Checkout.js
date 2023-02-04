import SiteHeader,{SiteFooter,PageHeading} from './CommonParts';

function Checkout()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <PageHeading  message='Checkout' />
        <div className='container'>
          <div className='row'>
              <div className='col-12 pt-3'>
              <form className="py-4" method="post">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="firstname">Firstname</label>
                    <input className="form-control" id="firstname" type="text" name="firstname" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="lastname">Lastname</label>
                    <input className="form-control" id="lastname" type="text" name="lastname" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="company">Company</label>
                    <input className="form-control" id="company" type="text" name="company" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="street">Street</label>
                    <input className="form-control" id="street" type="text" name="street" />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 col-lg-3">
                    <label className="form-label" for="region">Region</label>
                    <input className="form-control" id="region" type="text" name="region" />
                  </div>
                  <div className="col-md-6 mb-3 col-lg-3">
                    <label className="form-label" for="zip">ZIP</label>
                    <input className="form-control" id="zip" type="text" name="zip" />
                  </div>
                  <div className="col-md-6 mb-3 col-lg-3">
                    <label className="form-label" for="state">State</label>
                    <select className="form-select js-states" id="state" name="country" data-customclass="form-control py-1">
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                      <option value="#">Placeholder</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3 col-lg-3">
                    <label className="form-label" for="country">Country</label>
                    <select className="form-select js-countries" id="country" name="country" data-customclass="form-control py-1 text-nowrap"></select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label" for="phone">Telephone</label>
                    <input className="form-control" id="phone" type="tel" name="phone" />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label" for="email_account">Email</label>
                    <input className="form-control" id="email_account" type="email" name="email_account" />
                  </div>
                  <div className='col-md-4 pt-2'>
                        <br/>
                        <button type='submit' className='btn btn-info'>Place Order</button>
                  </div>
                </div>
              
              </form>
              </div>
          </div>

        </div>
        <SiteFooter />
      </div>
    );
}
export default Checkout