import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "../Componets/header";
import Footer from "../Componets/Footer";

export default function Mangas(){
    return (
        <main>
            <Header />
            <section className="container">
                <h1 className="headers"><span>#</span>Lista de Mangás</h1>
                <div className="row">
                    <div className="col-2 mangas">
                        <Link to="/detalhes">
                            <img src={require("../img/dragon ball.jpg")} alt="dragon ball" />
                            <strong>Dragon Ball</strong>
                        </Link>
                    </div>
                    <div className="col-2 mangas">
                        <Link to="/detalhes">
                            <img src={require("../img/dragon ball.jpg")} alt="dragon ball" />
                            <strong>Dragon Ball</strong>
                        </Link>
                    </div>
                    <div className="col-2 mangas">
                        <Link to="/detalhes">
                            <img src={require("../img/dragon ball.jpg")} alt="dragon ball" />
                            <strong>Dragon Ball</strong>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}