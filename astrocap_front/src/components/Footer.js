import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillMail, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Footer.css';
import { motion } from "framer-motion";

function Footer() {

    return (
        <Container
            fluid
            className="footer"
            style={{
                zIndex: "10",
                position: "relative",
                minHeight: "30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                background: "black",  // Semi-transparent white
                // backdropFilter: "blur(10px)",  // Glassmorphism effect
                // WebkitBackdropFilter: "blur(10px)",  // Safari support
                padding: "5px",
            }}
        >
            <Row className="justify-content-around text-center">
                <Col xs={12} md={6} lg={4} className="contactus" style={{ paddingBottom: "15px", paddingTop: "15px" }}>
                    <h3 className="d-none d-md-block" style={{ fontSize: "16px", color: "white", fontWeight: "bold" }}>
                        2025 © All rights received
                    </h3>
                </Col>

                <Col xs={12} md={6} lg={4} className="dum">
                    <div className="foot d-none d-md-block" style={{ fontSize: "18px", color: "white", fontWeight: "bold", marginBottom: "10px" }}>
                        Connect With Me
                    </div>
                    <div className="icons" style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "28px" }}>
                        <a href="mailto:" className="footer-icon footer-icon-mail">
                            <span><AiFillMail /></span>
                        </a>
                        <a href="" className="footer-icon footer-icon-ln">
                            <span><FaLinkedinIn /></span>
                        </a>
                        <a href="" className="footer-icon footer-icon-ig">
                            <span><AiFillInstagram /></span>
                        </a>
                        <a href="" className="footer-icon footer-icon-yt">
                            <span><AiFillYoutube /></span>
                        </a>
                        <a href="" className="footer-icon footer-icon-wa">
                            <span><FaWhatsapp /></span>
                        </a>
                    </div>


                </Col>
            </Row>

            <Row className="justify-content-center py-3">
                <Col
                    xs={12}
                    className="text-center"
                    style={{
                        fontSize: "14px",
                        color: "white",
                        fontWeight: "500",
                        cursor: "pointer",
                        position: "relative",
                        display: "inline-block",
                    }}
                >
                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        style={{ display: "inline-block" }}
                    >
                        Developed by
                        <span
                            style={{
                                textDecoration: "underline",
                                marginLeft: "5px",
                                position: "relative",
                            }}
                        >
                            Jananee Manickam
                            <span
                                style={{
                                    content: '""',
                                    position: "absolute",
                                    left: 0,
                                    bottom: "-2px",
                                    width: "100%",
                                    height: "2px",
                                    background: "white",
                                    transform: "scaleX(0)",
                                    transformOrigin: "right",
                                    transition: "transform 0.3s ease-out",
                                }}
                                className="underline"
                            />
                        </span>
                    </motion.span>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;