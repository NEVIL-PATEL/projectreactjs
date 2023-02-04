import SiteHeader,{SiteFooter,PageHeading} from './CommonParts';

function LoginRegister()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <PageHeading  message='New account / sign in' />
        <div className='container'>
          <div className='row mt-5'>
              <div className="col-lg-6">
              <header>
                <h2 className="text-uppercase mb-4">New account</h2>
                <p className="lead">Not our registered customer yet?</p>
              </header>
              
              <hr className="border-gray-200" />
              <form>
                <div className="form-group mb-1">
                  <label className="form-label" for="useremail"></label>
                  <input className="form-control" id="useremail" type="text" name="email" placeholder="Enter your email address" />
                </div>
                <div className="form-group mb-1">
                  <label className="form-label" for="userpassword"></label>
                  <input className="form-control" id="userpassword" type="text" name="password" placeholder="Enter your password" />
                </div>
                <div className="form-group mb-1">
                  <label className="form-label" for="userpassword2"></label>
                  <input className="form-control" id="userpassword2" type="text" name="password2" placeholder="Enter confirm password" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" for="mobile"></label>
                  <input className="form-control" id="mobile" type="tel" name="mobile" placeholder="Enter your mobile" />
                </div>
                <div className="form-group mb-3 text-center">
                  <button className="btn btn-info" type="submit"><i className="fas fa-user me-2"></i>Register</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6">
              <header>
                <h2 className="text-uppercase mb-4">Login</h2>
                <p className="lead">Already our customer?</p>
              </header>
            
              <hr className="border-gray-200" />
              <form action="customer-orders.html">
                <div className="form-group mb-1">
                  <label className="form-label" for="loginemail"></label>
                  <input className="form-control" id="loginemail" type="text" name="loginemail" placeholder="Enter your email address" />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" for="loginpassword"></label>
                  <input className="form-control" id="loginpassword" type="text" name="loginpassword" placeholder="Enter your password" />
                </div>
                <div className="form-group mb-3 text-center">
                  <button className="btn btn-info" type="submit"><i className="fas fa-door-open me-2"></i>Log in</button>
                </div>
              </form>
            </div>
            
          </div>

        </div>
        <SiteFooter />
      </div>
    );
}
export default LoginRegister