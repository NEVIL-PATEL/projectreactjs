import React from 'react';
class SimpleInterest extends React.Component
{
    constructor(props)
    {
        super(props);
        this.temp_amount = '';
        this.temp_rate = '';
        this.temp_year = '';
        this.state = {
            amount : '',
            rate : '',
            year : '',
            result : '',
        }
    }
    changeamount = (event) =>{
        this.temp_amount = event.target.value; //textbox value 
    }
    changerate = (event) =>{
        this.temp_rate = event.target.value;
    }
    changeyear = (event) =>{
        this.temp_year = event.target.value;
    }
    calculate = () => {
        this.setState(
            {
                amount:this.temp_amount,
                rate:this.temp_rate,
                year:this.temp_year,
                result:  (parseInt(this.temp_amount) * parseInt(this.temp_rate) * parseInt(this.temp_year)) / 100
            });
    }
    render()
    {
        return (
            <div className='col-lg-4'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h3>Simple Interest Calculator</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="amount" placeholder="Amount" onBlur={this.changeamount} />
                            <label for="amount">Principal Amount</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="rate" 
                            placeholder="rate" onBlur={this.changerate} />
                            <label for="rate">Interest Rate</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="year" 
                            placeholder="year" onBlur={this.changeyear} />
                            <label for="year">Tenure in year</label>
                            </div>
                            <button onClick={this.calculate} type="button" className="btn btn-primary">Calculate Interest</button>
                        </form>
                    </div>
                    <div className='card-footer'>
                        <h5>Amount {this.state.amount}</h5> 
                        <h5>Rate {this.state.rate}</h5> 
                        <h5>Year {this.state.year}</h5> 
                        <h4 className='badge bg-danger'>{this.state.result}</h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default SimpleInterest