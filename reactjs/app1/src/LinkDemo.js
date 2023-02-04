import React, { Component } from 'react';
class LinkExample extends Component {
    constructor(props) {
        super(props);
        this.url = props.url;
        this.state = { 
            wait_time:parseInt(props.wait_time),
            url: '#',
            title:props.title,
         }
    }
    UpdateTime= () =>
    {
        console.log("Current Time ",new Date().toLocaleTimeString());
        if(this.state.wait_time>0) //5
        {
            this.setState({
                label:"Please wait for " + this.state.wait_time + " seconds to download",
                wait_time:this.state.wait_time - 1
            })
        }
        else
        {
            this.setState({
                label:"Download now",
                url:this.url,
            })
            clearInterval(this.intervalID); //used to stop calling UpdateTime() method at
        }
    }
    componentDidMount()
    {
        this.intervalID = setInterval(this.UpdateTime,1000);
        // setInterval method return number we store it into property too letter cancel it 
    }
    render() 
    { 
        
        return ( 
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-header">
                        <h1>{this.state.title}</h1>
                    </div>
                    <div className='card-body'>
                        <h4>
                            <a target='blank' href={this.state.url} className='btn btn-primary'>{this.state.label}</a>
                        </h4>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LinkExample;