import React, { Component } from 'react';
class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            countries : props.countries,
            listitems : this.state.countries.map((country)=> <li  key={country.id} className='list-group-item'><button onClick={this.DeleteItem(country)} className='fa fa-trash'></button> {country.name} </li>) 
         }
    }
    DeleteItem = (country) => {
        console.log(country);
    }
    render() 
    {
        return ( <div className='container'>
        <div className='row'>
            <div className='col-12'><h3>List with keys</h3></div> <hr/>
            <div className='col-lg-3'>
                <ul className='list-group'>
                    {this.state.listitems}
                </ul>
            </div>
        </div>
    </div> );
    }
}
export default CountryList;