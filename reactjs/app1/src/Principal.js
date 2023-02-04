import React from 'react';
//create class 
class Principal extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            name : props.name,
            experience : props.experience,
            photo: props.photo,
            qualification : props.qualification
        }
    }
    ChangeDetail = () => {
        this.setState({
            name :'Krishna Patel',
            experience :'30 year',
            photo : 'https://www.picsum.photos/350',
        });
    }
    render()
    {
        return (
            <div className='col-lg-3 mb-3'>
                <div className='card shadow'>
                    <div className='card-header text-bg-danger'>
                        <h3>{this.state.name}</h3>
                        <h5>{this.state.experience}</h5> 
                    </div>
                    <div className='card-body'>
                        <img src={this.state.photo} className='img-fluid' alt='' /> <br/><br/><br/>
                        <button type='button' className='btn btn-danger' onClick={this.ChangeDetail}>Change Detail</button>
                    </div>
                    <div className='card-footer d-flex justify-content-between'>
                        <h5>{this.state.qualification}</h5> 
                        <h4 className='badge bg-danger'>{this.state.experience} Year experence</h4>
                    </div>
                </div>
            </div>
        );
    }
}
export default Principal