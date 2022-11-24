import React from 'react'
import Sidebar from "../components/Sidebar";


const List: React.FunctionComponent = () => {
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
                        <h2 className="welcome-title animated fadeInLeft bryan">Liste des eleves chez HEI</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
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

export default List
