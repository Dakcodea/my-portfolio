import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <React.Fragment>
                <Navbar className="bg-gray-600" sticky="top" dark expand="md">
                    <div className="container mx-auto flex justify-between">
                        <NavbarToggler className="border-0" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mr-auto">
                                <NavItem>
                                    <NavLink
                                        to="/"
                                        exact
                                        activeClassName="text-white"
                                        className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-blue-500 text-4xl font-bold cursive tracking-widest"
                                    >
                                        Dakota
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/post"
                                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                                        activeClassName="text-gray-50 bg-blue-500"
                                    >
                                        Blog Posts
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/project"
                                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                                        activeClassName="text-gray-50 bg-blue-500"
                                    >
                                        Projects
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        to="/about"
                                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-blue-400"
                                        activeClassName="text-gray-50 bg-blue-500"
                                    >
                                        About Me
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <div className="inline-flex py-3 px-3 my-6">
                                <SocialIcon
                                    url="https://twitter.com/Dakcodea/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
                                <SocialIcon
                                    url="https://www.linkedin.com/in/dakota-cook-988574155/"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
                                <SocialIcon
                                    url="https://github.com/Dakcodea"
                                    className="mr-4"
                                    target="_blank"
                                    fgColor="#fff"
                                    style={{ height: 35, width: 35 }}
                                />
                            </div>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;