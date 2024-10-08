import { Col } from "react-bootstrap";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";
import navIcon7 from "../assets/img/nav-icon7.svg";
import navIcon8 from "../assets/img/nav-icon8.svg";

export const ProjetoCard = ({ titulo, descricao, imgUrl, playstore, github, figma, der, download }) => {
    return (
        <Col sm={2} md={2} lg={3} xs={9}>
            <div className="proj-imgbx ">
                <img src={imgUrl} alt={titulo} />
                <div className="proj-txtx">
                    <h4>{titulo}</h4>
                    <span>{descricao}</span>
                    <br />
                    <div className="projeto-icons justify-content-center">
                        {playstore && (
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href={playstore} target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon4} alt="PlayStore" />
                                    </a>
                                </div>
                            </span>
                        )}
                        {github && (
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon5} alt="Github" />
                                    </a>
                                </div>
                            </span>
                        )}
                        {figma && (
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href={figma} target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon6} alt="Figma" />
                                    </a>
                                </div>
                            </span>
                        )}
                        {der && (
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href={der} target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon7} alt="Der" />
                                    </a>
                                </div>
                            </span>
                        )}
                        {download && (
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href={download} target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon8} alt="Der" />
                                    </a>
                                </div>
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Col>
    );
};
