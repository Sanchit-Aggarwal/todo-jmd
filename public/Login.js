import React from 'react';
var a=(

  <div className="login-form">
     <h1>Jai Mata Di!</h1>
     <div className="form-group ">
       <input type="text" className="form-control" placeholder="Username " id="UserName" />
       <i className="fa fa-user"></i>
     </div>
     <div className="form-group log-status">
       <input type="password" className="form-control" placeholder="Password" id="Passwod" />
       <i className="fa fa-lock"></i>
     </div>
      <span className="alert">Invalid Credentials</span>
      <a className="link" href="#">Lost your password?</a>
      <br /><br />
      <div className='spanner'>



      </div>

   </div>


);
export class Login extends React.Component
{
  constructor(prop)
  {
    super(prop);
    this.signUp = this.signUp.bind(this);
    this.state={toLoad:a};
  }
  signUp()
  {
    var b=(<h1>Now sign up page will open!<h1>);
    //this.setState({toLoad:b});
  }
  render()
  {
  return({this.state.toLoad});
  }
}
