import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components'
const Ul = styled.ul`
  background-color:cyan;
  padding:10px;
  border:1px solid black;
  list-style-type:none;
`

const Li = styled.li`
  font-size:22px;
  text-transform:uppercase;
`
function Player(props)
{
    const {name,match,runs,century} = props;
    return(
      <Ul>
        <Li>Name :- {name}</Li>
        <Li>match :- {match}</Li>
        <Li>runs :- {runs}</Li>
        <Li>century :- {century}</Li>
      </Ul>
    )
}
function Team(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
            <Player name='Rohit sharma' match='200' runs='12000' century='5' />
            <Player name='Hardik pandya' match='100' runs='6000' century='1' />
            <Player name='akshar patel' match='50' runs='2000' century='2' />
        </div>
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Team />);

