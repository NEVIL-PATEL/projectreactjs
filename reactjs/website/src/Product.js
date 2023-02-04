import SiteHeader,{SiteFooter} from './CommonParts';
function Item(props)
{
  const {id,title,photo,price} = props;
  return(
    <div className="col-lg-3 col-md-6">
    <div className="product h-100">
      <div className="product-image"><a href='/productsdetail/1'><img className="img-fluid" src={photo} /></a></div>
      <div className="py-4 px-3 text-center">
        <h3 className="h5 text-uppercase mb-3"><a className="reset-link" href={id}>{title}</a></h3>
      </div>
      <p class="mb-0">{price}</p>
    </div>
  </div>
  )
}
function Product()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
        <div className='section'>
          <div className='container py-4'>
            <div className='row'>
              <div className='col-12'>
                 <h3>Product</h3>
              </div>
            </div>
            <div className='row gy-5 align-items-stretch'>
              <Item id='1' title='Furr Coat' photo='https://picsum.photos/300' price='2500' />   
              <Item id='1' title='Black Coat' photo='https://picsum.photos/301' price='22500' />   
             
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
}
export default Product