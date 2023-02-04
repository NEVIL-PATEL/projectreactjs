import { Outlet, Link } from "react-router-dom";
function Layout() {
    return(
        <div>
            <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus/1122334455/sales@theeasylearn.com">Contact Sales Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus/6677889900/support@theeasylearn.com">Contact Support Team</Link>
                        </li>
                    </ul>
        <Outlet />
        </div>
    )
}
export default Layout