import { Outlet, Link } from "react-router-dom";
function PriorityLayout() {
    return(
        <div>
            <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product/1">IPhone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product/2">Nexus One</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product/new">add new product</Link>
                        </li>
                    </ul>
        <Outlet />
        </div>
    )
}
export default PriorityLayout