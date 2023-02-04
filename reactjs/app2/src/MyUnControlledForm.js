import React, { Component } from 'react';

class MyUnControlledForm extends Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
    }
    submitForm = (event) =>{
        console.log(this.email.current.value);
        console.log(this.password.current.value);
        event.preventDefault();
    }
    render() { 
        return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h3>form using UnControlled Component approach</h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={this.submitForm}>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email</label>
                                    <input type='email' id='email'  className='form-control' 
                                    required ref={this.email} />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password' className='form-label'>Password</label>
                                    <input type='password' id='password'  className='form-control' 
                                    required ref={this.password} />
                                </div>
                                <button className='btn btn-danger'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}

export default MyUnControlledForm;