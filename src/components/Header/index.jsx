import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavbarBrand,
} from 'reactstrap';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.shape({
        push: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  toggleNavbar = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  signOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.context.router.history.push('/');
    this.props.signout();
  }

  render() {
    const {
      isAuthenticated,
    } = this.props.Auth;

    // const currentRoute = this.context.router.route.location.pathname;
    return (
      
      <div>
        <Navbar light expand="md" className='navbar-toggler-light'>
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mr-2"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-md-4" navbar>
              <NavItem >
                <Link to="/" onClick={this.toggleNavbar}>Home</Link>
              </NavItem>
              {isAuthenticated ? (
                <NavItem>
                  <Link to="/" onClick={this.signOut}>Sign Out</Link>
                </NavItem>
              ) : (
                <Fragment>
                  <NavItem>
                    <Link to="sign-in" onClick={this.toggleNavbar}>Sign In</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/sign-up" onClick={this.toggleNavbar}>Sign Up</Link>
                  </NavItem>
                </Fragment>
              ) }


              {/* <NavItem active={currentRoute === '/partnership'}>
                <Link to="/partnership" onClick={this.toggleNavbar}></Link>
              </NavItem>
              <NavItem active={currentRoute === '/contactus'}>
                <Link to="/contactus" onClick={this.toggleNavbar}>Contact</Link>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Auth : state.Auth,
})

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch({ type: 'AUTH_SIGNOUT' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
