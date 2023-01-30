import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import imagemContato from "../assets/img/contact-img.svg"

export const Contato = () => {
    const formularioDetalhes = {
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        mensagem: ''
    }
    
    const [form, setForm] = useState(formularioDetalhes);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setForm({
          ...form,
          [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Enviando...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(form),
        });
        setButtonText("Enviar");
        let result = await response.json();
        setForm(formularioDetalhes);
        if(result.code == 200){
            setStatus({success: true, message: "Mensagem enviada com sucesso"});
        } else {
            setStatus({success: false, message: "Aconteceu alguma coisa de errado, tente novamente mais tarde."})
        }
    }
    
    return(
        <section className="contact" id="contatos">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <img className={isVisible ? "animate__animated animate__zoomIn" : "invisivel"} src={imagemContato} alt="Contate-me" />
                        }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn animate-delay" : "invisivel"}>
                            <h2>Entre em contato</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} size={12} className="px-1">
                                        <input type="text" value={form.nome} placeholder="Nome" 
                                        onChange={(e) => onFormUpdate('nome', e.target.value) } />
                                    </Col>
                                    <Col sm={6} size={12} className="px-1">
                                        <input type="text" value={form.sobrenome} placeholder="Sobrenome" 
                                        onChange={(e) => onFormUpdate('sobrenome', e.target.value) } />
                                    </Col>
                                    <Col sm={6} size={12} className="px-1">
                                        <input type="email" value={form.email} placeholder="Email" 
                                        onChange={(e) => onFormUpdate('email', e.target.value) } />
                                    </Col>
                                    <Col sm={6} size={12} className="px-1">
                                        <input type="tel" value={form.telefone} placeholder="telefone" 
                                        onChange={(e) => onFormUpdate('telefone', e.target.value) } />
                                    </Col>
                                    {
                                        status.message &&
                                        <Row>
                                            <Col>
                                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                            </Col>
                                        </Row>
                                    }

                                    <Col size={12} className="px-1">
                                        <textarea rows="6" value={form.mensagem} placeholder="Mensagem..."
                                        onChange={(e) => onFormUpdate('mensagem', e.target.value) } />
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                   
                                </Row>
                            </form>
                        </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}