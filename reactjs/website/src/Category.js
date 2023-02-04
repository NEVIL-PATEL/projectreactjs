import SiteHeader,{SiteFooter} from './CommonParts';
export function Item(props)
{
  const {id,title,photo} = props;
  const url = "/products/" + id;
  return(
    <div className="col-lg-3 col-md-6">
    <div className="product h-100">
      <div className="product-image"><a href={url}><img className="img-fluid" src={photo} /></a></div>
      <div className="py-4 px-3 text-center">
        <h3 className="h5 text-uppercase mb-3"><a className="reset-link" href={id}>{title}</a></h3>
      </div>
    </div>
  </div>
  )
}
function Category()
{
    return(
    <div className='wide' id='all'>
        <SiteHeader />
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
            </div>
          </div>
        </div>
        <SiteFooter />
      </div>
    );
}
export default Category