import React, { Component } from 'react'
import Top from './Header';
import './login.css';
export default class Login extends Component {
  
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    fetch("http://localhost:3000/login_user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if (data.status === "email_not_verified") {
        alert("Email is not verified");
      } else if (data.status === "error") {
        alert("Wrong password");
      }else if (data.status === "user_notfound") {
        alert("User not Found");
      }
      else if (data.status === "ok") {
        const { token, email } = data.data;
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", email);
        window.location.href = '/mainpage';
      }
      
    })
  }
  
  render() {
    return (
      <><Top></Top><form onSubmit={this.handleSubmit}>
         <div className="container_login"><div className="rectangle_login"></div></div>
        <div className='container_login'><h3 className='heading_login'>Sign In</h3></div>
        
        <div className="container_login text1_login">
        <div className="textbox_login">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
        </div>
        <div className="container_login">
        <div className="textbox_login">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => this.setState({ password: e.target.value })} />
        </div>
        </div>
        <div className="container_login">
        
          <button type="submit" className="button_login">
            Submit
          </button>
        
        </div>
        <div className="container_login">
        <p className="forgot-password text-right">
          Not registered <a href="/signup">sign up?</a>
        </p>
        </div>
      </form></>
    )
  }
}