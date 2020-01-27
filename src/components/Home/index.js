import React from 'react'
import './index.css'
import image1 from './assests/Meredith_logo.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BackgroundSlideshow from 'react-background-slideshow'
import image2 from './assests/Meredith_logo.png'
import image3 from './assests/Meredith_logo.png'
import image4 from './assests/Meredith_logo.png'

 

export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
       
      }

      

    handleSubmit(e){

        
        console.log("submit The value!!!");
        this.props.history.push('/home');
    }

    render(){
        return(
            <div>
            <AppBar position="static">
            <Toolbar variant="dense" style = {{background:"white"}}>
              <Typography variant="h6" color="primary">
                    <img src={image1} alt="Meredith Logo" /> 
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="container">
        <div className="login-wrap">
            <div className="login-html">
                <div className = "logo">
                    <img src={image1} alt="Meredith Logo" />
                </div>
                <form onSubmit={this.handleSubmit}>
                <input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Login In</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label for="tab-2" className="tab">Register</label>
                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <label for="user" className="label">Username</label>
                            <input id="user" type="text" className="input" onChange={this.handleChange}/>
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" onChange={this.handleChange}/>
                        </div>
                        <div className="group">
                            <input id="check" type="checkbox" className="check" checked />
                            <label for="check"><span className="icon"></span> Keep me Logged in</label>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Log In" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="sign-up-htm">
                        <div className="group">
                            <label for="user" className="label">Username</label>
                            <input id="user" type="text" className="input" />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Repeat Password</label>
                            <input id="pass" type="password" className="input" data-type="password" />
                        </div>
                        <div className="group">
                            <label for="pass" className="label">Email Address</label>
                            <input id="pass" type="text" className="input"/>
                        </div>
                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" />
                        </div>
                        <div className="hr"></div>
                        <div className="foot-lnk">
                            <label for="tab-1">Already Member?</label>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
        </div>
        </div>
        )
    }
}