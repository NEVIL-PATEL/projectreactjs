import React, { Component } from 'react';
class LikeCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            like : props.like,
            title : props.title,
            photo : props.photo,
            like_image : 'like.png',
            isLike:false
         }
        this.UpdateLike = this.UpdateLike.bind(this);
    }
    UpdateLike(){
        console.log('Update Like counter by 1');
        console.log(this.state.title);
        if(this.state.isLike==false)
        {
            this.setState({
                like:parseInt(this.state.like) + 1,
                like_image:'liked.png',
                isLike:true
            });
        }
        else 
        {
            this.setState({
                like:parseInt(this.state.like) - 1,
                like_image:'like.png',
                isLike:false
            });
        }
    }
    render() { 
        return ( 
            <div className='col-lg-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>{this.state.title}</h4>
                    </div>
                    <div className='card-body'>
                        <img className='img-fluid' src={this.state.photo}  />
                        <p className='text-end'>
                            <img onClick={this.UpdateLike} src={this.state.like_image} className='img-fluid' />
                            <span className="badge bg-secondary"> {this.state.like}</span>
                            <img src='share.png' className='img-fluid' />
                            <img src='report.png' className='img-fluid' />
                        </p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default LikeCounter;