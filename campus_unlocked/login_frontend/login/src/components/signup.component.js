import React, { Component } from 'react'
import './signup.css'
import Top from "./Header"

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      fname : "",
      lname : "",
      email : "",
      password : "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register",{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept : "application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if (data.status === "Invalidemail") {
        alert("use only campus email");
      } 
      else if (data.status === "userexist") {
        alert("user alredy exist");
      }else{
      alert("Please check your email to verify your account");
      }
    })
  }

  render() {
    return (
      <><Top /><form onSubmit={this.handleSubmit}>
        <div className="container_signup"><div className="rectangle_signup"></div></div>
        <div className="container_signup"><h3 className="heading_signup">Sign Up</h3></div>

        <div className="container_signup text1_signup">
          <div className="textbox_signup">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => this.setState({ fname: e.target.value })} />
          </div>
        </div>

        <div className="container_signup">
          <div className="textbox_signup">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => this.setState({ lname: e.target.value })} />
          </div>
        </div>

        <div className="container_signup">
          <div className="textbox_signup">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => this.setState({ email: e.target.value })} />
          </div>
        </div>

        <div className="container_signup">
          <div className="textbox_signup">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => this.setState({ password: e.target.value })} />
          </div>
        </div>

        <div className="container_signup">
            <button type="submit" className="button_signup">
              Submit
            </button>
        </div>

        <div className="container_signup">
          <p className="forgot-password_signup">
            Already registered <a href="/signin">sign in?</a>
          </p>
        </div>
      </form></>
    )
  }
}
