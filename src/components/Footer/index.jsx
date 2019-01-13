import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-12">
            <ul className="footer-group">
              <Link to="/about-us" ><li>About Us</li></Link>
              <Link to="/contact-us"><li>Contact Us</li></Link>
              <Link to="/FAQ"><li>FAQ</li></Link>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
};

export default Footer;