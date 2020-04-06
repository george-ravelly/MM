import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

import "./style.css";
import Header from "../Componets/header";
import Footer from "../Componets/Footer";

export default function Inicial(){
    const [mangas, setMangas] = useState([]); 
    const [pages, setPages] = useState(1);
    const id = localStorage.getItem('id');

    useEffect(() => {
        api.get(`mangas?pages=${pages}`, {
            headers: {
                Authorization: id
            }
        }).then(response => {
            setMangas(response.data);
        })
    },[id, pages]);

    return(
        <main>
            <Header />
            <section className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <h1 className="headers"><span>#</span>Mangás Adicionados</h1>
                        <div className="row">
                            {mangas.map(manga => (
                                <div 
                                    className="col-12 col-lg-6 listar" 
                                    key={manga.id}
                                >
                                    <img 
                                        src={require(`../img/${manga.nome}.jpg`)} 
                                        alt={manga.nome}
                                    />
                                    <ul>
                                        <li>
                                            <div className="detalhes">
                                                <strong>{manga.nome}</strong><br />
                                                <small>{manga.autor}</small>
                                                <p>{manga.descricao}</p>
                                                <Link 
                                                    to="/detalhes" 
                                                    className="btn btn-primary"
                                                >
                                                    mais...
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="butoes">
                            <button 
                                className="btn btn-secondary"
                                onClick={() => setPages(pages-1)}
                            >
                                Anterior
                            </button>
                            <button 
                                className="btn btn-success" 
                                onClick={() => setPages(pages+1)}
                            >
                                Proximo
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 historico">
                        <h1 className="headers"><span>#</span>Histórico</h1>
                        <div>
                            <img 
                                src={require("../img/one punch.jpg")} 
                                alt="one" 
                            />
                            <Link 
                                to="/detalhes" 
                                className="text-uppercase"
                            >
                                <strong 
                                    style={{maxWidth: "250px"}} 
                                    className="d-block text-truncate"
                                >
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