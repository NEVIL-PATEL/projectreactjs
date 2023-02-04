import { useParams } from "react-router-dom"
function ContactUs(){
    const {mobile,email} = useParams() 
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <h1>Contact us</h1> <hr/>
                    <h3>Mobile {mobile}</h3>
                    <h3>Email {email}</h3>
                </div>
            </div>
        </div>
    )
}
export default ContactUs