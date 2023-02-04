import React, { Component } from 'react';

class MyControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            interest : ''
        }
    }
    onInputChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    onFormSubmit = (e) =>{
        console.log(this.state);
        var amount = this.state.amount;
        var rate = this.state.rate;
        var year = this.state.year;
        if(amount=="" || rate=="" || year=="")
        {
            alert("all inputs are required");
        }
        else 
        {
            amount = parseInt(amount);
            rate = parseInt(rate);
            year = parseInt(year);
            this.setState({
                interest:(amount * rate * year) / 100
            })
        }
        e.preventDefault(); 
    }
    render() { 
        return ( 
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h3>form using Controlled Component approach</h3>
                            </div>
                            <div className='card-body'>
                                <form>
                                    <div className='mb-3'>
                                        <label htmlFor='amount' className='form-label'>Amount</label>
                                        <input type='number' id='amount' name='amount' className='form-control' value={this.state.amount} 
                                        onChange={this.onInputChange} required />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='rate' className='form-label'>Rate</label>
                                        <input type='number' id='rate' name='rate' className='form-control' value={this.state.rate} 
                                        onChange={this.onInputChange} required />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='year' className='form-label'>Year</label>
                                        <input type='number' id='year' name='year' className='form-control' value={this.state.year} 
                                        onChange={this.onInputChange} required />
                                    </div>
                                    <button onClick={this.onFormSubmit} className='btn btn-danger'>Calculate Interest</button>&nbsp;
                                    <button type='reset' className='btn btn-warning'>clear all</button>
                                    <h3 className='m-3'>{this.state.interest}</h3>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default MyControlledForm;