import { useParams } from "react-router-dom"

function SingleProduct(){
    const {id} = useParams();
    var name='';
    if(id=='1')
        name = "IPhone";
    else 
        name = "Nexus One";
    return(
        <div>
            <h1>Single Products</h1> <hr/>
            <h3>Product id = {id}</h3>
            <h3>Product name = {name}</h3>
        </div>
    )
}
export default SingleProduct