import SiteHeader,{SiteFooter,PageHeading} from './CommonParts';
function CartItem(props)
{
  const {title,photo,quantity,price} = props;
  return(
    <tr className="text-sm">
          <td className="align-middle border-gray-300 py-3"><a href="">
            <img className="product-cart-image" src={photo}  /></a></td>
          <td className="align-middle border-gray-300 py-3"><a href="">{title}</a></td>
          <td className="align-middle border-gray-300 py-3"> 
            <input className="form-control" type="number" value={quantity}  />
          </td>
          <td className="align-middle border-gray-300 py-3">{price}</td>
          <td className="align-middle border-gray-300 py-3">{quantity * price}</td>
          <td className="align-middle border-gray-300 py-3">
            <button className="btn btn-link p-0" type="button"><i className="fas fa-trash-alt"></i></button>
          </td>
    </tr>
  );
}
function Cart()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <PageHeading  message='Shopping cart' />
        <div className='container'>
          <div className='row'>
              <div className='col-12 pt-3'>
                <p className="text-muted lead mb-5">You currently have 3 item(s) in your cart.</p>
                <div className="table-responsive">
                  <table className="table text-nowrap">
                    <thead>
                      <tr className="text-sm">
                        <th className="border-gray-300 border-top py-3" colspan="2">Product</th>
                        <th width='10%' className="border-gray-300 border-top py-3">Quantity</th>
                        <th className="border-gray-300 border-top py-3">Unit price</th>
                        <th className="border-gray-300 border-top py-3">Total</th>
                        <th className="border-gray-300 border-top py-3">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                        <CartItem title='Hair color' photo='/img/basketsquare.jpg' quantity='10' price='100' />
                        <CartItem title='face wash' photo='/img/basketsquare.jpg' quantity='5' price='200' />
                    </tbody>
                    <tfoot>
                      <tr>
                        <th className="py-3 border-0" colspan="4"> <span className="h4 text-gray-700 mb-0">Total</span></th>
                        <th className="py-3 border-0"> <span className="h4 text-gray-700 mb-0">$446.00</span></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <a href='/Checkout' className='btn btn-info mb-3'>Proceed to checkout</a>
              </div>
          </div>

        </div>
        <SiteFooter />
      </div>
    );
}
export default Cart