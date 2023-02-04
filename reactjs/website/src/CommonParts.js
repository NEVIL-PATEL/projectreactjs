function SiteHeader()
{
    return (
        <header className='nav-holder make-sticky'>
        <div className="navbar navbar-light bg-white navbar-expand-lg py-0" id="navbar">
          <div className="container py-3 py-lg-0 px-lg-0">
            <h1>Online shoping app</h1>
           
            <button className="navbar-toggler text-primary border-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false" aria-label="Toggle navigation"><span className="sr-only">Toggle navigation</span><i className="fas fa-align-justify"></i></button>
            
            <div className="collapse navbar-collapse" id="navigationCollapse">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/category">Category</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products/0">Products</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cart">Cart</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login_register">Login/Register</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}
export function SiteFooter()
{
    return(
        <footer>
            <div className="bg-dark py-5">
            <div className="container">
                <div className="row align-items-cenrer gy-3 text-center">
                <div className="col-md-6 text-md-start">
                    <p className="mb-0 text-sm text-gray-500">&copy; 2022. The Easylearn Academy </p>
                </div>
                <div className="col-md-6 text text-md-end">
                    <p className="mb-0 text-sm text-gray-500">Template designed by  :- The Easylearn Academy </p>
                </div>
                </div>
            </div>
            </div>
      </footer>
    )
}
export function PageHeading(props)
{
  const message = props.message;
  return(
    <section className="bg-pentagon py-4">
        <div className="container py-3">
          <div className="row d-flex align-items-center gy-4">
            <div className="col-md-7">
              <h1 className="h2 mb-0 text-uppercase">{message}</h1>
            </div>
           
          </div>
        </div>
    </section>
  )
}
export default SiteHeader