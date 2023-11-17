import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-padding">
                <Row className="align-item-center">
                    <Col sm={6}>
                        <h3 className='logo-tipo'>Henrique Franco</h3>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/henrique-franco-43a98520b/" target="_blank"><img src={navIcon1} /></a>
                        </div>

                        <div className="social-icon">
                            <a href="https://play.google.com/store/apps/developer?id=Henrique+Franco" target="_blank"><img src={navIcon4} alt="PlayStore" /></a>
                        </div>


                        <div className="social-icon">
                            <a href="https://github.com/rick5678" target="_blank"><img src={navIcon5} alt="Github" /></a>
                        </div>

                        <p>CopyRight 2023. Todos direitos reservados</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}