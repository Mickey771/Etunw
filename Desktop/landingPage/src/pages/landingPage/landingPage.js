import React from 'react'
import Navbar from '../../components/navbar'
import { Button, Col, Container, Row } from "reactstrap"
import "../../custom-css/my-style.css"
import SecondaryButton from '../../components/buttons/secondaryButton'
import rightImage from "../../assets/images/rightSideImage.png"
import apple from "../../assets/icons/apple.png"
import playstore from "../../assets/icons/playstore.png"
import sideImage from "../../assets/images/sideImage.png"
import laptopImage from "../../assets/images/laptopImage.png"
import PrimaryButton from '../../components/buttons/primaryButton'
import Footer from '../../components/footer'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className='page_wrapper'>

                <Container>
                    <div className='mt-5'>
                        <Row >
                            <Col md={6}>
                                <p className='heading_1 text-lg-left text-xs-center'>
                                    Put Your Money <br />
                                    to work through us.
                                </p>

                                <p className='define_text'>
                                    we are experts in helping you access financial tools<br />
                                    that steadily grow your finances. Get richer<br />
                                    by invesing through us with ease.
                                </p>

                                <div className='mt-5 btn_fixed'>
                                    <SecondaryButton value={"Create Free Account"} />
                                </div>

                                <div className='mt-4 d-flex app_btn_fixed btn_fixed'>
                                    <Button className='app_btns mb-md-3'><img src={apple} style={{ height: "22px", width: "20px" }} /> Soon in iphone</Button>
                                    <Button className='app_btns ms-md-4'><img src={playstore} style={{ height: "22px", width: "20px" }} /> Soon in Android</Button>
                                </div>

                            </Col>
                            <Col md={6}>
                                <div className='side_images'>
                                    <div className='image_wrapper'>
                                        <img src={sideImage} className="side_images_style" />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='optional_section'>

                            <Col md={6}>
                                <div className='text_wrapper'>
                                    <p className='heading_2'>
                                        We manage the <br />
                                        Investment for you.
                                    </p>

                                    <p className='define_text'>
                                        Our team make investing very very easy as we save you<br />
                                        stress of researching for investments, either<br />
                                        low risk or high by looking after your Investment.
                                    </p>

                                    <div className='mt-5 btn_fixed'>
                                        <SecondaryButton value={"Start Investing"} />
                                    </div>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div className='side_images'>
                                    <div className='laptop_image_wrapper'>
                                        <img src={laptopImage} className="side_images_style" />
                                    </div>
                                </div>

                            </Col>

                        </Row>

                        <Row className='section_style fixed_sections'>
                            <Col md={6}>

                                <div className='laptop_image_wrapper'>
                                    <img src={laptopImage} className="side_images_style" />
                                </div>

                            </Col>
                            <Col md={6}>
                                <div className='text_wrapper'>
                                    <p className='heading_2'>
                                        We manage the <br />
                                        Investment for you.
                                    </p>

                                    <p className='define_text'>
                                        Our team make investing very very easy as we save you<br />
                                        stress of researching for investments, either<br />
                                        low risk or high by looking after your Investment.
                                    </p>

                                    <div className='mt-5'>
                                        <SecondaryButton value={"Start Investing"} />
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className='section_style'>

                            <Col md={6}>
                                <div className='text_wrapper'>
                                    <p className='heading_3'>
                                        Seamless fund<br />
                                        withdrawal
                                    </p>

                                    <p className='define_text'>
                                        Our team make investing very very easy as we save you<br />
                                        stress of researching for investments, either<br />
                                        low risk or high by looking after your Investment.
                                    </p>

                                    <div className='mt-5 btn_fixed'>
                                        <Button className='dark_btn'>Start Now</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='side_images'>
                                    <div className='mobile_image_wrapper text-xs-center'>
                                        <img src={rightImage} className="side_images_style" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Footer />
            </div>
        </>
    )
}

export default LandingPage