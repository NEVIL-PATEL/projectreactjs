import React, { Component } from 'react';
class MyLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            time : new Date().toLocaleTimeString()
         }
    }
    componentWillMount()
    {
        console.log("componentWillMount method is called...");
    }
    shouldComponentUpdate()
    {
        console.log("shouldComponentUpdate method is called...");
        return true;
    }
    componentDidMount()
    {
        console.log("componentDidMount method is called...");
    }
    componentWillUpdate()
    {
        console.log("componentWillUpdate method is called...");
    }
    componentDidUpdate()
    {
        console.log("componentDidUpdate method is called...");
    }
    //arrow function
    //function-name = () => {
        //code goes here 
    // }
    updatetime = () => {
        this.setState({
            time: new Date().toLocaleTimeString()
        });
    }
    render() { 
        console.log("render method is called...");
        return (  
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Life Cycle Example</h1> <hr/>
                        <button className='btn btn-primary'>{this.state.time}</button> <hr/>
                        <button onClick={this.updatetime} className='btn btn-danger'>Update Current Time</button>
                    </div>
                </div>
            </div>
        );
    }
    componentWillUnmount()
    {
        console.log("componentWillUnmount method is called...");
    }
}
 
export default MyLifeCycle;