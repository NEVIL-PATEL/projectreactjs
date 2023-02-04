import React from 'react';
import ReactDOM from 'react-dom/client';
import CountryList from './WorkWithList.js';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// lesson 1
// var output = <div><h1>Hello World....</h1><hr/><p>this is first example of react JS</p><h3>end of file</h3></div>;

// lesson 2 
// var output = React.createElement("h1",{},"content created without using JSX");

//lesson 3 how to use expression in JSX 
// var number1 = 10;
// var number2 = 3;
// var output = <div><h1>Expression in JSX</h1><hr/><p>addition = {number1 + number2}</p><p>substraction = {number1 - number2}</p><p>multiplication = {number1 * number2}</p><p>division = {number1 / number2}</p></div>

//lesson 4 how to insert large html block 
/* var page = (
    <div>
        <h1>List of topics </h1> <hr/>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>Bootstrap</li>
            <li>HTML 5</li>
            <li>React JS</li>
            <li>Node JS</li>
        </ul>
        <table border='2' align='center' width='50%' cellPadding='10'>
            <tr>
                <td>Kanji</td>
                <td>Abhishek</td>
                <td>Nevil</td>
            </tr>
            <tr>
                <td>Vishal</td>
                <td>Krishna</td>
                <td>Sanjay</td>
            </tr>
            <tr>
                <td>Ravi</td>
                <td>jatin</td>
                <td>darshan</td>
            </tr>
        </table>
    </div>
) */

//lesson 5 using bootstrap in JSX
/*
var page = (
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-8 offset-2'>
                <div className='card'>
                    <div className='card-header text-bg-primary'>
                        <h3>Login</h3>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                            </div>
                            <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                            </div>
                            <div className='d-flex justify-content-end '>
                                <button type="button" class="btn btn-primary">Login</button>&nbsp;
                                <button type="reset" class="btn btn-secondary">reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
*/
//lesson 6 using function jsx 
//create object 
/*
    const course = {
    name:'React js',
    duration_in_days:90,
    fees:12000.99
}
function DisplayCourse(course)
{
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Calling function using JSX</h1>
                    <p>Name {course.name}</p> 
                    <p>Duration {course.duration_in_days}</p>
                    <p>Fees {course.fees}</p>
                </div>
            </div>
        </div>
    )
}
//calling function 
//root.render(DisplayCourse(course));
*/
/*
    function GetOddEven(number)
{
    if (number%2==0)
        return <div>given number is even number</div>
    else 
        return <div>given number is odd number</div>
}
root.render(GetOddEven(3));
*/
//How to update the Rendered(already displayed) Element 
/*
    function showCurrentDateTime()
{
    const output =  (
        <div className='container'>
            <div className='row mb-3'>
                <div className='col-12'>
                    <a className='btn btn-primary'>Current Date :- 
                    {new Date().getDate()} - {new Date().getMonth()} - {new Date().getFullYear()}</a>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <a className='btn btn-danger'>Current Time :- {new Date().toLocaleTimeString()}</a>
                </div>
            </div>
        </div>
    );
    root.render(output);
}
var interval_in_milliseconds = 1000 // 1000 miliseconds = 1 seconds
setInterval(showCurrentDateTime,interval_in_milliseconds)
*/
//example of functional component
/*
    function ImageGallary()
{
    return (
        <div className='container'>
            
            <div className='row'>
                <div className='col-12'>
                    <h1>Image Gallary</h1>
                </div>
                <div className='col-12 col-sm-6 col-md-4'>
                    <img className='img-fluid img-thumbnail' src='http://picsum.photos/300?random=1' />
                </div>
                <div className='col-12 col-sm-6 col-md-4'>
                    <img className='img-fluid img-thumbnail' src='http://picsum.photos/300?random=2' />
                </div>
                <div className='col-12 col-sm-6 col-md-4'>
                    <img className='img-fluid img-thumbnail' src='http://picsum.photos/300?random=3' />
                </div>
            </div>
        </div>
    );
}
root.render(<ImageGallary />);
*/
 /* function Header()
{
    return (
    <div className='container-fluid bg-light p-3'>
        <div className='row'>
            <div className='col-12'>
                <h1>The easylearn Academy</h1>
            </div>
        </div>
    </div>
    );
}
function Footer()
{
    return (
    <div className='container-fluid bg-light p-3 sticky-bottom'>
        <div className='row'>
            <div className='col-12'>
                <p className='text-center text-muted'>
                    This is footer
                </p>
            </div>
        </div>
    </div>
    );
}
function Page()
{
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Page Content</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolores repudiandae quo perspiciatis excepturi corrupti, numquam velit impedit magnam iusto nemo, omnis totam vel natus quasi dolorum saepe aliquam praesentium doloribus distinctio est aut ea cumque? Facilis, odit pariatur necessitatibus nesciunt dicta adipisci dolorum consectetur porro ratione quas id similique architecto! Fuga atque, mollitia laborum quam quasi nihil exercitationem numquam, similique consequatur molestiae quidem! Minima temporibus dicta aperiam atque modi fugit, nemo culpa ipsam beatae provident deleniti, eligendi, minus neque ipsum dolorem nulla! Sit eum esse commodi laborum, et quasi ad numquam repudiandae aliquam quod neque officiis molestiae similique soluta quae quidem hic tenetur magni consequatur corporis quibusdam illum. Esse magnam provident, blanditiis doloremque aut ex nisi ea ad laboriosam odit? Fugit eius corrupti minus voluptatem adipisci dolor quam officia fuga dignissimos iusto sapiente, placeat veniam soluta quasi ab blanditiis voluptate error in! Vero consequuntur iure magnam tenetur ratione modi optio voluptatibus aspernatur, eos animi quis alias quidem? Cumque quas, cupiditate error ratione, eius, consequatur unde ut at quos culpa velit libero hic facere odit dolores cum soluta qui facilis consequuntur impedit ducimus! Enim, temporibus? Aliquid recusandae deleniti veniam aspernatur quod quos saepe dignissimos provident, explicabo iusto at quam vel! <br/>
                        minus voluptatem adipisci dolor quam officia fuga dignissimos iusto sapiente, placeat veniam soluta quasi ab blanditiis voluptate error in! Vero consequuntur iure magnam tenetur ratione modi optio voluptatibus aspernatur, eos animi quis alias quidem? Cumque quas, cupiditate error ratione, eius, consequatur unde ut at quos culpa velit libero hic facere odit dolores cum soluta qui facilis consequuntur impedit ducimus! Enim, temporibus? Aliquid recusandae deleniti veniam aspernatur quod quos saepe dignissimos provident, explicabo iusto at quam vel!
                        </p>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    );
}
root.render(<Page />);
*/
/* 
function Student(props)
{
    return (
        
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mb-3'>
                    <div className='card shadow'>
                        <div className='card-header'>
                            Student Name : {props.name}
                        </div>
                        <div className='card-body'>
                            <p>
                                <b>RollNo</b> {props.rollno}<br/>
                                <b>Standard</b> {props.standard} <br/>
                                <b>division</b> {props.division} <br/>
                                <b>birthdate</b> {props.dob} <br/>
                            </p>
                        </div>
                    </div>
                </div>
            
    );
}
function Page()
{
    return (
    <div className='container'>
        <div className='row'>
            <Student name='Ankit Patel' rollno='100' standard='12' division='A' dob='12-july-1985' />
            <Student name='Jiya Patel' rollno='200' standard='5' division='d' dob='10-feb-2010' />
            <Student name='Shiv Patel' rollno='300' standard='7' division='b' dob='22-dec-2022' />
            <Student name='Divya Patel' rollno='400' standard='11' division='c' dob='22-jan-1989' />
            <Student name='ram Patel' rollno='500' standard='10' division='c' dob='22-jan-1989' />
        </div>
    </div>);
}
root.render(<Page />); */
//class components 
// class Page extends React.Component
// {
//     render()
//     {
//         return(
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-12'>
//                         <h1>Example of class components</h1>
//                         <p>
//                             first and simple example of components
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// root.render(<Page />);
// class Book extends React.Component
// {
//     constructor(props){
//         super(props);
//         this.state = {
//             'title' : this.props.title,
//             'author': this.props.author,
//             'price' : this.props.price,
//             'photo' : this.props.photo
//         }
//     }
//     render(){
//         return (
//             <div className='col-lg-4 mb-3'>
//                 <div className='card shadow'>
//                     <div className='card-header text-bg-primary'>
//                         <h3>{this.state.title}</h3>
//                     </div>
//                     <div className='card-body'>
//                         <p>
//                             Author :- {this.state.author} <br/>
//                             <img src={this.state.photo} className='img-fluid' /> <br/>
//                             price :- {this.state.price} <br/>
//                             <button className='btn btn-primary'>Add to cart</button>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
// class Page extends React.Component
// {
//     render(){
//         return(
//             <div className='container'>
//                 <div className='row'>
//                      <div className='col-12'>
//                          <h1>Example of class components</h1>
//                      </div>
//                      <Book title='Learn React' author='Ankit Patel' price='400' photo='https://www.picsum.photos/300?random=1' />
//                      <Book title='Learn Nodejs' author='Shiv Patel' price='500' photo='https://www.picsum.photos/300?random=2' />
//                      <Book title='Learn Javascript' author='Ram Patel' price='600' photo='https://www.picsum.photos/300?random=3' />
//                      <Book title='Learn HTML' author='Mohan Patel' price='700' photo='https://www.picsum.photos/300?random=4' />
//                      <Book title='Learn css' author='vishnu Patel' price='800' photo='https://www.picsum.photos/300?random=5' />
//                  </div>
//              </div>
//         )
//     }
// }
// root.render(<Page />    )
// function Page()
// {
//     return (
//     <div className='container'>
//         <div className='row'>
//             <Principal name='Ankit Patel' qualification='MCA' experience='5' photo='https://www.picsum.photos/300?random=1' />
//             <Principal name='Jiya Patel' qualification='MCA' experience='2' photo='https://www.picsum.photos/300?random=2' />
//             <Principal name='Ram Patel' qualification='ME.IT' experience='3' photo='https://www.picsum.photos/300?random=3' />
//         </div>
//     </div>);
// }
//  function Page()
// {
//     return (
//     <div className='container'>
//         <div className='row'>
//             <SimpleInterest  />
//             <SimpleInterest  />
//             <SimpleInterest  />
//         </div>
//     </div>);
// }
// function Page()
// {
//     return (
//         <div className='container'>
//             <div className='row mt-3'>
//                 <MyCalculator />
//                 <MyCalculator />
//                 <MyCalculator />
//             </div>
//         </div>
//     )
// }
// function Page()
// {
//         return (
//         <div className='container'>
//             <div className='row mt-3'>
//                <LinkExample wait_time='10' url='http://www.google.com' title='Bramhastra' />
//                <LinkExample wait_time='20' url='http://www.amazon.com' title='PUSHPA 2' />
//                <LinkExample wait_time='05' url='http://www.apple.com' title='KGF 3' />
//             </div>
//         </div>)
// }
// function MailBox(props)
// {
//     var messages = props.messages;
//     return (
//         <div className='container'><div className='row'><div className='col-12'>
//             <h2>Mail Box</h2> <hr/>
//             {messages.length>0 && <p><b>you have {messages.length} new messages</b></p>}
//             {messages.length==0 && <p className='text-danger'>you have no new messages</p>}
//         </div></div></div>
//     )
// }
// var messages = ['earth','sun','moon','star','galaxy'];
// // var messages = [];
// root.render(<MailBox messages={messages} />)
// function StateList(props)
// {
//     var states = props.states;
//     var statelist = states.map((CurrentState) => <li className='list-group-item'>{CurrentState}</li>)
//     //OR 
//     // var statelist = [];
//     // for(var i=0;i<states.length;i++)
//     // {
//     //     statelist[i]= <li className='list-group-item'>{states[i]}</li>
//     // }
//     return  (
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-3'>
//                     <h2>Concept of List</h2> <hr/>
//                         <ul className='list-group'>{statelist}</ul>
//                         </div>
//                     </div>
//                 </div>
//             )
// }
// var states = ['Gujarat','Maharastra','Madhya pradesh','Rajasthan','tamil-nadu','punjab']
// root.render(<StateList states={states} />)
// function CountryList(props)
// {
//     var countries = props.countries;
//     var listitems = countries.map((country)=> <li key={country.id} className='list-group-item'>{country.name}</li>)
//     return(
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-12'><h3>List with keys</h3></div> <hr/>
//                 <div className='col-lg-3'>
//                     <ul className='list-group'>
//                         {listitems}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }
var countries = [{name:'Bharat',id:1},{name:'China',id:2},{name:'USA',id:3},{name:'Japan',id:4},{name:'France',id:5}]
root.render(<CountryList countries={countries} />)