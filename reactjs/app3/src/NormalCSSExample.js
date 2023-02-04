import React, { Component } from 'react';
import './Book.css'
class Book extends Component {
    render()
    {
        //object destructring technique
        const {name,author,price,pages} = this.props;
        return ( 
            <div className='BookInfo'>
                <p>Book Name : {name}</p>
                <p>Author Name : {author}</p>
                <p>Price : {price}</p>
                <p>Pages : {pages}</p>
            </div>
         );
    }
}
 
export default Book;