import React from 'react';
import Sidebar from "../components/Sidebar";
import "../css/bootstrap.min.css";
import "../css/Home.css";
import img1 from "../components/image/1.jpg";
import img2 from "../components/image/2.jpg";
import img3 from "../components/image/3.jpg";
import img4 from "../components/image/four.jpeg";

const Home: React.FunctionComponent = () => {
    return (<>
            <Sidebar />
            <header className="site-header container animated fadeInDown">
                <div className="header-wrapper">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="site-branding">
                                <a href="#"><h1>HEI</h1></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div id="menu-container">
                <div id="menu-1" className="homepage home-section container">
                    <div className="home-intro text-center">
                        <h2 className="welcome-title animated fadeInLeft bryan"> Welcome </h2>
                        <p className="animated fadeInRight">Cette page est dedier pour la grande famille de HEI, nous y verrons essentiellement <span
                            className="blue">la liste des eleves </span><span className="green">trier </span> selon leurs rangs dans leurs groupes respectives .</p>
                    </div>
                    <div className="home-projects">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="project-title animated fadeInUp">
                                    <h2>Introduction</h2>
                                    <p>Comme son nom l'indique, HEI est une universite specialiser en Informatique de programation.
                                        Notre formation dure <span className="blue">3 ans </span> et les frais de scolarites sont tres abordables.
                                        Ayant ete creer que depuis pres de un an, HEI fais deja partie de l'elite a <span className="green">Madagascar </span>
                                        et egalise deja les autres ecoles dans d'autres pays, voir meme les sur-classer</p>
                                    <a href="#" className="pink-button">Continue Journal</a>
                                </div>
                            </div>
                            <div className="project-home-holder col-md-6 col-sm-12">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="project-item one animated fadeInRight">
                                            <img src={img1} alt="none"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="project-item two animated fadeInRight">
                                            <img src={img3} alt="none"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="project-item three animated fadeInRight">
                                            <img src={img2} alt="none"/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="project-item four animated fadeInRight">
                                            <img src={img4} alt="none"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="site-footer container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-footer">
                            <ul className="social">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 copyright">
                        <p>Project 2 &copy; from <a href="">Digitalisers (git digitalisers eto aveo)</a></p>
                    </div>
                </div>
            </footer>

            </>
    )
}

export default Home;
