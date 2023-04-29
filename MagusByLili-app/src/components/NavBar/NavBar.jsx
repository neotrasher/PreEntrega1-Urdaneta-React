import React from 'react';
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';

function Navbar(props) {
    return (
        <div>
            <header className="headerInfo">
                <nav className="navbarInfo">
                    <div className="container-fluid d-flex justify-content-around">
                        <a className="navbar-brand ms-5" href="https://www.instagram.com/magusbylili/" target="_blank">
                            <img className="logosNavbar" src={props.instagramUrl} alt="instagram" />
                        </a>
                        <a className="navbar-brand" href="https://www.facebook.com/magusbylili" target="_blank">
                            <img className="logosNavbar" src={props.facebookUrl} alt="facebook" />
                        </a>
                        <span className="headerInfo col-6 d-none d-sm-none d-md-block text-center">Productos hechos a mano, no olvides
                            consultar los tiempos de envío.</span>
                        <a href="https://wa.me/573154299368" target="_blank"><img className="logosNavbar me-3"
                            src={props.whatsappUrl} alt="whatsapp" /></a>
                        <a href="">
                            <img className="logosNavbar me-3" src={props.userUrl} alt="usuario" />
                        </a>
                        <CartWidget
                            cartUrl="./src/assets/img/cart.png"
                        />
                    </div>
                </nav>
            </header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="ms-lg-5" href="./index.html"><img className="maguslogo" src={props.magusLogo} alt="maguslogo"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-lg-0 ms-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./magusbylili.html">MagusbyLili</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./colecciones.html">Colecciones</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="./productos.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="./productos.html">Aretes</a></li>
                                    <li><a className="dropdown-item" href="./productos.html">Prendedores</a></li>
                                    <li><a className="dropdown-item" href="./productos.html">Pulseras</a></li>
                                    <li><a className="dropdown-item" href="./productos.html">Collares</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./contacto.html">Contacto</a>
                            </li>
                        </ul>
                        <form className="d-flex me-5" role="search">
                            <input className="form-control me-2" type="search" placeholder="¿Qué estás buscando?" aria-label="Search" id="searchInput" />
                            <button className="btn btn-outline-dark" type="submit" id="searchButton">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
