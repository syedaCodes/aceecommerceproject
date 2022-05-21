import React from 'react';
import { Link } from 'react-router-dom';

class Form extends React.Component {
    // constructor(props){
    //     super(props);

    //     this.onChange = this.onChange.bind(this);

    // }

    // onChange(e){
    //     this.setState({ [e.target.name]: e.target.value })
    // }

  render(){

    // const { errors, identifier, password, isLoading } = this.state;

    return (
        <div className="form_container">
    
            {/* Login form */}
              <form className="form_container--signin">
                    <h2 title="Log In to Ace Real Estate" className="form_container--heading">Welcome Back!</h2>
                    <div className="form_container--group">
                        <label htmlFor="username">Username:</label>
                        <input type="username" name="username" placeholder="Enter your username" autoComplete="on" />
                        {/* <input type="username" name="username" placeholder="Enter your username" autoComplete="on" value={identifier} error={errors.identifier} onChange={this.onChange}/> */}
                    </div>
                    <div className="form_container--group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="Enter your password" autoComplete="off" />
                        {/* <input type="password" name="password" placeholder="Enter your password" autoComplete="off" value={password} error={errors.identifier} onChange={this.onChange}/> */}
                    </div>
                    <button type="submit" className="btn">Login</button>
                    {/* <button type="submit" className="btn" disabled={isLoading}>Login</button> */}
    
                    <Link to="/signup">Don't have an account? Register Now</Link>
              </form>
          </div>
      )
  }
}

export default Form;