import { Container, Row, Col, Nav, Tab } from "react-bootstrap"
import cinema from "../assets/img/cinema-img.jpg";
import netflix from "../assets/img/netflix-img1.png"
import bsone from "../assets/img/bsone-img.jpg"
import minhasTarefas from "../assets/img/minhas-tarefas.png"
import sudokuSolveria from "../assets/img/sudoku-solveria.png"
import petSaude from "../assets/img/pet-saude.png"
import springBoot from "../assets/img/spring.png"
import { ProjetoCard } from "./ProjetoCard"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projetos = (scrolly) => {

    console.log(scrolly);

    const projetosWeb = [
        {
            titulo: "Netflix",
            descricao: "Uma replica do site NETFLIX. Desenvolvido com React.Js, consumindo API publica",
            imgUrl: netflix,
            github: "https://github.com/rick5678/Netflix-React.js",
        },
    ];
    const projetosMobile = [
        {
            titulo: "Sudoku Solveria",
            descricao: "Game de Sudoku com mais de 200 níveis!",
            imgUrl: sudokuSolveria,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.sudoku_solveria",
            github: "https://github.com/rick5678/sudoku-solveria",

        },
        {
            titulo: "Minhas tarefas",
            descricao: "Crie e gerencie suas tarefas e finanças.",
            imgUrl: minhasTarefas,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.minhas_tarefas",
            github: "https://github.com/rick5678/controlador-de-tarefas",
            figma: "https://www.figma.com/proto/5tMkaBrdVEF4WGWsR4Ilio/Minhas-Tarefas?type=design&node-id=1-2&t=4Y9hRuUH1vTMPJNs-1&scaling=scale-down&page-id=0%3A1&mode=design",
        },
        {
            titulo: "Pet Saúde",
            descricao: "Cuide das vacinas e vermífugos de seus pets",
            imgUrl: petSaude,
            playstore: "https://play.google.com/store/apps/details?id=com.henrique.pet_care",
            github: "https://github.com/rick5678/pet-saude",
        },

    ];
    const projetosBackEnd = [
        {
            titulo: "Marca Ai",
            descricao: "API em JAVA SpringBoot",
            imgUrl: springBoot,
            github: "https://github.com/rick5678/API-Marca-AI",
            der: "/portifolio/static/media/der-marca-ai.9ed514818800a58bca23.jpg",
        },


    ];

    return (
        <section className="project" id="projetos">
            <Container>
                <Row >
                    <Col size={8} >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : "invisivel"}>
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
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__backInLeft " : ""}>
                                            <Tab.Pane eventKey="primeiro">
                                                <Row className="justify-content-center" >
                                                    {
                                                        projetosWeb.map((projeto, index) => {
                                                            return (
                                                                <ProjetoCard key={index} {...projeto} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="segundo">
                                                <Row className="justify-content-center">
                                                    {
                                                        projetosMobile.map((projeto, index) => {
                                                            return (
                                                                <ProjetoCard key={index} {...projeto} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="terceiro">
                                                <Row className="justify-content-center">
                                                    {
                                                        projetosBackEnd.map((projeto, index) => {
                                                            return (
                                                                <ProjetoCard key={index} {...projeto} />
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

        </section>
    );
}