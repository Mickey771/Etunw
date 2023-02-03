import React from 'react'
import { Col, Row } from 'reactstrap'
import logo from "../assets/images/logo.png"
import "../custom-css/componentStyle.css"
import fb from "../assets/icons/fb.png"
import twitter from "../assets/icons/twitter.png"
import insta from "../assets/icons/insta.png"

const Footer = () => {
    return (
        <>
            <div className='footer_wrapper p-5'>

                <Row className='p-5'>
                    <Col md={4} sm={6} xs={6}>
                        <div>
                            <img src={logo} style={{ height: "85px", width: "120px" }} className="mb-5" />
                            <div>
                                <p className='footer_heading'>Address and contact</p>
                                <p className='footer_text'>
                                    Address to physical office <br /> or quarters
                                </p>

                                <p className='footer_text'>Email Address</p>
                                <p className='footer_text'>Phone Number</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} sm={6}>
                        <div className='mt-lg-5'>
                            <p className='footer_heading'>Products</p>
                            <p className='footer_text'>Invest</p>
                            <p className='footer_text'>Save Pot</p>
                            <p className='footer_text'>Wallet</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='mt-lg-5'>
                            <p className='footer_heading'>Company</p>
                            <p className='footer_text'>About</p>
                            <p className='footer_text'>FAQs</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='mt-lg-5'>
                            <p className='footer_heading'>Legal</p>
                            <p className='footer_text'>Terms</p>
                            <p className='footer_text'>Privacy</p>
                            <p className='footer_text'>Security</p>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div className='mt-lg-5'>
                            <p className='footer_heading text-lg-end'>Socials</p>
                            <div className='d-flex flex-row justify-content-lg-end'>
                                <div>
                                    <img src={twitter} alt="" className='me-3'/>
                                    <img src={fb} alt="" className='me-3' />
                                    <img src={insta} alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='text-center'>
                    <p className='footer_text'>
                        Xenga is a purposeful investing platform. we aim at getting people richer through investments in the<br />
                        easiest way possible to them. Grow wealth through us  
                    </p>
                </Row>

                <div className='text-center mt-3'>
                    <p className='tagss'>Xenga @ 2022</p>
                </div>
            </div>
        </>
    )
}

export default Footer