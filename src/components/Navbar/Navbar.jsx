import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import styles from "./Navbar.module.css";
import { BrowserRouter ,Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
     
        <header>
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand  className={styles.LogoNavbar} href="/">
                <strong>Hazula</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse  isOpen={this.state.collapse} navbar>
                <MDBNavbarNav  right>
                  <MDBNavItem active >
                    <MDBNavLink className={styles.bagas} to="/homepage" >Homepage</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className={styles.bagas} to="/gallery" >Gallery</MDBNavLink>
                  </MDBNavItem>                  
                  <MDBNavItem>
                    <MDBNavLink  className={styles.bagas}to="/item">Item</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className={styles.bagas} to="/about">About</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>

      
    );
  }
}

export default Navbar;