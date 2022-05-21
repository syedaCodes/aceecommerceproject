import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Header extends React.Component {

  render(){
    
    const { isAuthenticated } = false;
    // const { isAuthenticated } = this.props.auth;

    const userLinks = (
        <ul className="nav_menu--list">
            <Link to="/about"><li>About</li></Link>
        </ul>
    );

    const guestLinks = (
        <ul className="nav_menu--list">
            <Link to="/about"><li>About</li></Link>
            <Link to="/logout"><li>Logout</li></Link>
        </ul>
    );

    return (
        <header>
            <div className="wrapper">
    
              {/* logo */}
              <div className="nav_logo">
                <h1><i>Ace</i></h1>
              </div>
    
              {/* menu */}
              <div className="nav_menu">
                  { isAuthenticated ? userLinks : guestLinks }
              </div> 
              {/* end of menu */}
    
            </div>
          </header>
      )
  }
}

// Header.propTypes = {
//     auth: React.PropTypes.object.isRequired
// }

// function mapStateToProps(state){
//     return{
//         auth: state.auth
//     }
// }

// export default connect(mapStateToProps)(Header);
export default Header;