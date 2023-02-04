import React, { Component } from 'react';
class Book extends Component {
    render()
    {
        //object destructring technique
        const  {name,author,price,pages} = this.props;
        const PlayerStyle = {
            width:'50%',
            backgroundColor:'#eeeeee',
            border:'2px solid black',
            fontSize:'1.5rem',
            marginBottom:'20px',
            listStyleType:'none'
        } 
        return ( 
            <div >
                <ul style={PlayerStyle}>
                    <li>Book Name : {name}</li>
                    <li>Author Name : {author}</li>
                    <li>Price : {price}</li>
                    <li>Pages : {pages}</li>
                </ul>
            </div>
         );
    }
}
 
export default Book;