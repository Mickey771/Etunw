import React from 'react'
import "../custom-css/componentStyle.css"
import PrimaryButton from './buttons/primaryButton'
import SecondaryButton from './buttons/secondaryButton'
import logo from "../assets/images/logo.png"


const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar_bg">
                <div className="container-fluid">
                    <a className="navbar-brand ms-lg-5" href="#"><img src={logo} className="navbar_logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-lg-5 " id="navbarNav">
                        <div className='nav_wrapper'>
                            <div>
                                <ul className="navbar-nav mbl_screen">
                                    <li className="nav-item nav_elements ms-lg-5">
                                        <a className="nav-link nav_links" aria-current="page" href="#">Invest</a>
                                    </li>
                                    <li className="nav-item nav_elements ms-lg-5">
                                        <a className="nav-link nav_links" href="#">FAQ</a>
                                    </li>
                                    <li className="nav-item nav_elements ms-lg-5">
                                        <a className="nav-link nav_links" href="#">Company</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='me-lg-5 nav_btns_wrapper'>
                                <div className='me-lg-4'>
                                    <PrimaryButton value={"Sign In"} />
                                </div>
                                <div>
                                    <SecondaryButton value={"Create Free Account"}/>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>

        </>
    )
}

export default Navbar