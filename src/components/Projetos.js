import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import cinema from "../assets/img/cinema-img.jpg";
import netflix from "../assets/img/netflix-img1.png"
import bsone from "../assets/img/bsone-img.jpg"
import { ProjetoCard } from "./ProjetoCard"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projetos = (scrolly) => {

    console.log(scrolly);

    const projetos = [
        {
            titulo: "Cinema",
            descricao: "Desenvolvido com React.Js, com estático ",
            imgUrl: cinema,
        },
        {
            titulo: "Netflix",
            descricao: "Uma replica do site NETFLIX. Desenvolvido com React.Js, consumindo API publica",
            imgUrl: netflix,
        },
        {
            titulo: "BSOne",
            descricao: "Uma landing page estática",
            imgUrl: bsone,
        },

    ];
    
    return (
        <section className="project" id="projetos">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": "invisivel"}>
                                <h2>Projetos</h2>
                                <p>Uma seleção de projetos elaborados e codificados</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="primeiro">
                                    <Nav variant="pills" className="nav-pilss mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="primeiro">Web</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="segundo">Mobile</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="terceiro">Back-end</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                                        <Tab.Pane eventKey="primeiro">
                                            <Row>
                                                {
                                                    projetos.map((projeto, index) => {
                                                        return(
                                                            <ProjetoCard key={index} {...projeto}/>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}