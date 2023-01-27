import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import homeImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Back-end", "Front-end", "Mobile", "Full-Stack"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random + 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        
        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        } else if(isDeleting && updateText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else{
            setIndex(prevIndex => prevIndex +1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="alig-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) =>                         
                            <div className={isVisible ? "animated__animated animate_fadeIn" : ""}>
                                <span className="tagline">Bem-vindo ao meu portifólio</span>
                                <h1>{'Olá eu sou Henrique Dev. '}<span className="warp">{text}</span></h1>
                                <p>
                                    Sou um desenvolvedor full-stack com habilidades em uma variedade de linguagens de programação, incluindo Java, Python e JavaScript. 
                                   Com fortes habilidades em desenvolvimento web e mobile, eu posso criar soluções empresariais robustas e escaláveis. 
                                   Se você precisa de um desenvolvedor para ajudar a melhorar o desempenho e a eficiência de sua empresa, entre em contato hoje.
                                </p>
                                <a href="#contatos" className="conectar">Vamos nos conectar <ArrowRightCircle size={25}/></a>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={homeImg} alt="home imagem"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}