import React from 'react';
function Greeting(props)
{
    if (props.isLoggedIn==true)
        return <h3>Welcome back {props.username}</h3>;
    else 
        return <h3>Please Login</h3>
}
class ConditionalRenderExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoggedIn: true,
            username: 'Ankit Patel'
         }
    }
    login = () =>
    {
        this.setState({
            isLoggedIn:true
        })
    }
    logout = () =>
    {
        this.setState({
            isLoggedIn:false
        })
    }
    LoginLogoutButton = () =>
    {
        if(this.state.isLoggedIn==true)
            return <button className='btn btn-danger' onClick={this.logout}>Logout</button>
        else 
            return <button className='btn btn-primary' onClick={this.login}>Login</button>
    }
    render() { 
        var button = this.LoginLogoutButton()
        return ( 
            <div className="container">
                <div className="col-12">
                    <h1>Conditional rendering</h1> <hr/>
                    <Greeting isLoggedIn={this.state.isLoggedIn} username={this.state.username} /> 
                    {button}
                </div>
            </div>
         );
    }
}
export default ConditionalRenderExample;