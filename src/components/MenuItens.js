import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from "../assets/img/logo_transparent.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const MenuItens = () => {
    const [linkAtivo, setLinkAtivo] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateLinkAtivo = (value) => {
        setLinkAtivo(value);
    }

    return(
    <>
        <Navbar  expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className='logo-cor'/>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" 
                className={linkAtivo === 'home' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateLinkAtivo('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" 
                className={linkAtivo === 'skills' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateLinkAtivo('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projetos" 
                className={linkAtivo === 'projetos' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateLinkAtivo('projetos')}>Projetos</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/henrique-franco-43a98520b/" target="_blank"><img src={navIcon1} alt="Linkedin"/></a>
                </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      </>
    )
}