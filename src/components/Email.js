import { Alert } from "react-bootstrap";
import { Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react";

export const Email = ({onValidated, status, message}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if(status === 'sucesso')
            limparCampos();
    }, {status})

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const limparCampos = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Se inscreva para receber notícias</h3>
                        {status === 'enviando' && <Alert>Enviando...</Alert>}
                        {status === 'erro' && <Alert variant="erro">{message}</Alert>}
                        {status === 'sucesso' && <Alert variant="sucesso">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}