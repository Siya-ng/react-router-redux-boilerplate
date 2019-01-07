import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
  NavbarBrand,
} from 'reactstrap';
import styles from './styles';

class Header extends React.Component {
  // static contextTypes = {
  //   router: PropTypes.shape({
  //     history: PropTypes.shape({
  //       push: PropTypes.func.isRequired,
  //     }).isRequired,
  //   }).isRequired,
  // }
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

  render() {
    // const currentRoute = this.context.router.route.location.pathname;
    return (
      <div>
        <Navbar light expand="md" style={styles.header} className='navbar-toggler-light'>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-md-4" navbar>
              <NavItem >
                <Link to="/" onClick={this.toggleNavbar}>Home</Link>
              </NavItem>
              <NavItem>
                <Link to="sign-in" onClick={this.toggleNavbar}>Sign In</Link>
              </NavItem>
              <NavItem>
                <Link to="/sign-up" onClick={this.toggleNavbar}>Sign Up</Link>
              </NavItem>
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

export default Header;
