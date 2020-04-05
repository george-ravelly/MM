import React from "react";
import { Link } from "react-router-dom"
import "./style.css";
import Header from "../Componets/header";
import Footer from "../Componets/Footer";

export default function Inicial(){
    return(
        <main>
            <Header />
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <h1 className="headers"><span>#</span>Ultimos Adicionados</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6 listar">
                                <img src={require("../img/naruto.jpg")} alt="naruto" />
                                <ul>
                                    <li>
                                        <div className="detalhes">
                                            <strong>Naruto</strong>
                                            <p>
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                            </p>
                                            <Link to="/detalhes" className="btn btn-primary">
                                                mais...
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-6 listar">
                                <img src={require("../img/naruto.jpg")} alt="naruto" />
                                <ul>
                                    <li>
                                        <div className="detalhes">
                                            <strong>Naruto</strong>
                                            <p>
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                            </p>
                                            <Link to="/detalhes" className="btn btn-primary">
                                                mais...
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-6 listar">
                                <img src={require("../img/naruto.jpg")} alt="naruto" />
                                <ul>
                                    <li>
                                        <div className="detalhes">
                                            <strong>Naruto</strong>
                                            <p>
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                            </p>
                                            <Link to="/detalhes" className="btn btn-primary">
                                                mais...
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-6 listar">
                                <img src={require("../img/naruto.jpg")} alt="naruto" />
                                <ul>
                                    <li>
                                        <div className="detalhes">
                                            <strong>Naruto</strong>
                                            <p>
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                                Novo Manga...
                                            </p>
                                            <Link to="/detalhes" className="btn btn-primary">
                                                mais...
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="butoes">
                            <button className="btn btn-secondary">Anterior</button>
                            <button className="btn btn-success">Proximo</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 historico">
                        <h1 className="headers"><span>#</span>Histórico</h1>
                        <div>
                            <img src={require("../img/one punch.jpg")} alt="naruto" width="250"/>
                            <Link to="/detalhes" className="text-uppercase">
                                <strong style={{maxWidth: "250px"}} className="d-block text-truncate">
                                    One-Punch Man
                                </strong>
                            </Link>
                        </div>         
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}