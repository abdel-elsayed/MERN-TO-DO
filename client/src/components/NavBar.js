import React, {Component} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
  } from 'reactstrap'

 class NavBar extends Component {
     constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
     }

     toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
     }

      render() {
          return (
              <div>
                  <Navbar color="success" dark expand="sm" className="mb-5">
                      <Container>
                        <NavbarBrand href="/">
                            TO-DO List
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/abdel-elsayed">
                                        Github
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                      </Container>
                  </Navbar>
              </div>
          )
      }
  }
  
  export default NavBar