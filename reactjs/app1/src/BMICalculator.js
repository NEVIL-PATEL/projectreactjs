import React, { Component } from 'react';
class MyCalculator extends Component {
    constructor(props) {
        super(props);
        this.temp_weight = 0;
        this.temp_foot = 0;
        this.temp_inch = 0;
        this.state = {
            bmi : '',
        }
    }
   
    ChangeFoot = (event) => {
        this.temp_foot = event.target.value;
    }
    ChangeWeight = (event) =>{
        this.temp_weight = event.target.value;
    }
    ChangeInch = (event) =>{
        this.temp_inch = event.target.value;
    }
    calculateBMI = () =>{
        //calculate total inch 
        var totalinch = parseInt(this.temp_inch) + (12 * parseInt(this.temp_foot));
        var meter = totalinch / 39.37;
        var result = this.temp_weight / (meter * meter);
        this.setState({
                bmi : result
            }
        );
    }
    render() { 
        return (
            <div className='col-lg-4'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='h3'>BMI Calculator</div>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="weight" placeholder="Weight" onBlur={this.ChangeWeight} />
                            <label for="weight">Weight</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input onBlur={this.ChangeFoot} type="number" className="form-control" id="foot" placeholder="Foot" />
                            <label for="foot">Foot</label>

                            </div>
                            <div className="form-floating mb-3">
                            <input onBlur={this.ChangeInch} type="number" className="form-control" id="inch" placeholder="Inch" />
                            <label for="inch">Inch</label>
                            
                            </div>
                            <button onClick={this.calculateBMI} type="button" className="btn btn-primary">Calculate BMI</button>
                            <h4>{this.state.bmi}</h4>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MyCalculator;