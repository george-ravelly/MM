import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api";

import "./style.css";

import Header from "../Componets/header";
import Footer from "../Componets/footer";

export default function Inicial(){
    const [mangas, setMangas] = useState([]);
    const [ultManga, setUltManga] = useState([]);
    const [pages, setPages] = useState(1);
    const id = localStorage.getItem('id');
    const [total, setTotal] = useState(0)

    const historico = useHistory();


    async function ultVol(){
        const response = await api.get('ultimoVol');
        setUltManga(response.data.ultManga[0]);
    }

    useEffect(() => {
        api.get(`mangas?pages=${pages}`, {
            headers: {
                Authorization: id
            }
        }).then(response => {
            setMangas(response.data.mangas);
            setTotal(response.data.total);
        }).then(() => {
            ultVol();
        })
    },[id, pages]);     

    function paginacao(e){
        //proximo
        if(e>pages && (e-1)*4 < total){
            setPages(e);
        }
        //anterior
        else if(e>0 && e < pages){
            setPages(e);
        }
    }

    async function detalhes(manga){
        historico.push(`/detalhes/${manga.id}`);
    }
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
                                        src={require(`../img/${manga.id}.jpg`)} 
                                        alt={manga.nome}
                                    />
                                    <ul>
                                        <li>
                                            <div className="container detalhes">
                                                <strong>{manga.nome}</strong><br />
                                                <small>{manga.autor}</small>
                                                <p>{manga.descricao}</p>
                                                <button 
                                                    onClick={() => detalhes(manga)}
                                                    className="btn btn-primary"
                                                >
                                                    mais...
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="butoes">
                            <button 
                                className="btn btn-secondary"
                                onClick={() => paginacao(pages-1)}
                            >
                                Anterior
                            </button>
                            <button 
                                className="btn btn-success" 
                                onClick={() => paginacao(pages+1)}
                            >
                                Proximo
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3 historico">
                        <h1 className="headers"><span>#</span>Último adicionado</h1>
                        <div>
                            <img 
                                src={require(`../img/${ultManga.id}.jpg`)} 
                                alt={ultManga.nome} 
                            />
                            <Link 
                                to="/detalhes" 
                                className="text-uppercase"
                            >
                                <strong 
                                    style={{maxWidth: "250px"}} 
                                    className="d-block text-truncate"
                                >
                                    {ultManga.nome}
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