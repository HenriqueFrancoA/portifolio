import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo_transparent.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-padding">
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/henrique-franco-43a98520b/" target="_blank"><img src={navIcon1} /></a>
                        </div>
                        <p>CopyRight 2023. Todos direitos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}