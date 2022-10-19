import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext, { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);


    return (
        <nav className='header'>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <div>
                <NavLink
                    to="/Shop"
                    className={({ isActive }) =>
                        isActive
                            ? 'active'
                            : undefined
                    }

                >Shop</NavLink>

                <NavLink
                    to="/Orders"
                    className={({ isActive }) =>
                        isActive
                            ? 'active'
                            : undefined
                    }

                >Orders</NavLink>

                <NavLink
                    to="/Inventory"
                    className={({ isActive }) =>
                        isActive
                            ? 'active'
                            : undefined
                    }

                >Inventory</NavLink>

                <NavLink
                    to="/About"
                    className={({ isActive }) =>
                        isActive
                            ? 'active'
                            : undefined
                    }

                >About</NavLink>

                {
                    user?.uid ?

                        <button className='logout-btn' onClick={logOut}>Logout</button>
                        :
                        <>
                            <NavLink
                                to="/Signup"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active'
                                        : undefined
                                }
                            >Signup</NavLink>

                            <NavLink
                                to="/Login"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'active'
                                        : undefined
                                }
                            >Login</NavLink>
                        </>
                }
                <span>{user?.email}</span>

            </div>
        </nav>
    );
};

export default Header;