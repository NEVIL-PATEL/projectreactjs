import React from 'react';
//create class 
class Teacher extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : props.name,
            subject : props.subject,
            experience : props.experience,
            photo: props.photo
        }
    }
    render()
    {
        return (
            <div className='col-lg-3 mb-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h3>{this.state.name}</h3>
                        
                    </div>
                    <div className='card-body'>
                        <img src={this.state.photo} className='img-fluid' alt='' />
                    </div>
                    <div className='card-footer d-flex justify-content-between'>
                        <h5>{this.state.subject}</h5> 
                        <h4 className='badge bg-danger'>{this.state.experience} Year experence</h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default Teacher