WK4-WS-task3
    Add LoginModal to Header

1. 
add Modal, ModalHeader, ModalBody and Button to reactstrap imports
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Modal,
    ModalHeader,
    ModalBody,
    Button,
} from 'reactstrap';

2. import use Selector and selectCurrentUser

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/user/userSlice'


3. select the currentUser from redux

const currentUser = useSelector(selectCurrentUser);


4. 
add modal state

    const [modalOpen, toggleModal] = useState(false);

5. import Login component

import Login from '../features/user/Login'


6. set up Modal with Login component inside, be sure to pass toggleModal in to Login component


        <Modal isOpen={modalOpen} toggle={() => toggleModal(!modalOpen)}>

            <ModalHeader toggle={() => toggleModal(false)}>Login</ModalHeader>
            <ModalBody>
                <Login toggleModal={toggleModal}/>
            </ModalBody>
        </Modal>


7. 
inside navbar, below Nav but inside Collapse, add a span with the classname 

                    <span className='navbar-text ml-auto'>

                    </span>

for context: 

            <Navbar dark color="primary" sticky="top" expand="md">          
                <NavbarBrand className="ms-5" href="/">
                    <img src={NucampLogo} alt="NuCamp Logo"/>
                </NavbarBrand>
                <NavbarToggler onClick={() => toggleNav(!navOpen)} />
                <Collapse isOpen={navOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/directory">
                                <i className="fa fa-list fa-lg" /> Directory
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <i className="fa fa-info fa-lg" /> About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contactus">
                                <i className="fa fa-address-card fa-lg" />{'  '}
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <span className='navbar-text ml-auto'>

                    </span>
                </Collapse>
            </Navbar>


8. inside span, add curly braces so we can conditionally render either the current user's avatar if there is a current user or a button to login if there isn't.


                    {
                        currentUser ? 
                        <div style={{width: '4rem', height: '4rem'}}>
                            <img src={currentUser.avatar} alt={'user'} style={{width: '100%', height: '100%'}}/>
                        </div>
                        
                        :
                        <Button outline onClick={() => toggleModal(true)} style={{color: 'white', border: '1px solid white'}}>
                        <i className='fa fa-sign-in fa-lg' /> Login
                    </Button>
                    }


9.  check it out in the browser!


code at end of task 3:

            import { useState } from 'react';
            import { useSelector } from 'react-redux';
            import { 
                Navbar, 
                NavbarBrand,
                Collapse,
                NavbarToggler,
                Nav, 
                NavItem,
                Modal,
                ModalHeader,
                ModalBody,
                Button,
            } from 'reactstrap';
            import { NavLink } from 'react-router-dom';
            import NucampLogo from '../app/assets/img/logo.png';
            import Login from '../features/user/Login'
            import { selectCurrentUser } from '../features/user/userSlice'

            const Header = () => {

                const [navOpen, toggleNav] = useState(false);
                const [modalOpen, toggleModal] = useState(false);
                const currentUser = useSelector(selectCurrentUser);

                return (
                    <>
                    <Navbar dark color="primary" sticky="top" expand="md">          
                        <NavbarBrand className="ms-5" href="/">
                            <img src={NucampLogo} alt="NuCamp Logo"/>
                        </NavbarBrand>
                        <NavbarToggler onClick={() => toggleNav(!navOpen)} />
                        <Collapse isOpen={navOpen} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/directory">
                                        <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <i className="fa fa-address-card fa-lg" />{'  '}
                                        Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <span className='navbar-text ml-auto'>

                                {
                                    currentUser ? 
                                    <div style={{width: '4rem', height: '4rem'}}>
                                        <img src={currentUser.avatar} alt={'user'} style={{width: '100%', height: '100%'}}/>
                                    </div>
                                    
                                    :
                                    <Button outline onClick={() => toggleModal(true)} style={{color: 'white', border: '1px solid white'}}>
                                    <i className='fa fa-sign-in fa-lg' /> Login
                                </Button>
                                }
                            </span>
                        </Collapse>
                    </Navbar>
                    <Modal isOpen={modalOpen} toggle={() => toggleModal(!modalOpen)}>

                        <ModalHeader toggle={() => toggleModal(false)}>Login</ModalHeader>
                        <ModalBody>
                            <Login toggleModal={toggleModal}/>
                        </ModalBody>
                    </Modal>
                    </>
                )
            }
            export default Header
