import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
var count=0;
var pointer;

class Pending extends Component
{
  constructor(props)
  {
    super(props);
    this.state=
    {
      list_of_items:['item1','item2']
    };
  }
  render()
  {
    return(<h1>

    {
       this.state.list_of_items.map(
      function(element)
        {
          return
          (
             <li>
                 yoyo
             </li>

          );
        }
     )

   }
      </h1>);
  }
}

class App extends Component {


  render() {

    return (
      <div className="App">
        <div id='head'>
             <center><h1>Welcome,Jai Mata Di ,Happy Coding :)</h1></center>
        </div>
        <div className="main row ">
           <div className='col-md-6'>
             <div className="jumbotron container">

                <div className='row'>
                <label id='addSpace1'><strong><h4>Enter task name</h4></strong></label>
                <input id='feild' type='text' className='form-control col-sm-4'></input>
                <button id='addSpace' className='btn  btn-primary col-sm-3' onClick={this.addToList}>Add it to list</button>
              </div>


           </div>
        </div>
        <div>
            <div className='col'>
               <div className="jumbotron">
                <label id='yo'> <h3>Pending Items</h3></label>
                <Pending />
               </div>

             </div>
           <div className='col'>
               <div className="jumbotron">
                   <label> <h3>Completed Items</h3></label>
               </div>

           </div>
      </div>
      </div>

      </div>
    );
  }
}

export default App;
