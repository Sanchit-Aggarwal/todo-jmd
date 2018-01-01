import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
var count=0;
var pointer;

class App extends Component {


  render() {

    return (
      <div className="App">
        <div id='head'>
             <center><h1>Welcome,Jai Mata Di ,Happy Coding :)</h1></center>
        </div>
        <br />
        <div className="main row ">
        <div className='col'>
             <div className="jumbotron">

                <div className='row'>
                <label id='addSpace1'><strong><h4>Enter task name</h4></strong></label>
                <input id='feild' type='text' className='form-control col-sm-4'></input>
                <button id='addSpace' className='btn  btn-primary col-sm-3' onClick={this.addToList}>Add it to list</button>
                </div>


             </div>
        </div>
        <div className='col'>
        <div className="jumbotron full">
        <div id="myList">


        </div>

        </div>
        </div>
        </div>


      </div>
    );
  }
}

export default App;
