import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import api from "../api";

import Footer from "../Componets/Footer";
import "./style.css";

export default function Login(){
    async function LoginUser(e){

    }

    async function CadastrarUser(e){
        e.preventDefault();
        await api.post('/login',{

        })
    }
    return (
        <main>
            <div className="title-container">
                <h1>
                    <img 
                        src={require("../assets/logo_sem_fundo.png")} 
                        width="80" 
                        alt="logo"
                    />
                    Meus<strong>Mangás</strong>
                </h1>
            </div>
            <section className="container login-container">
                <div className="form-container">
                    <figure>
                        <img src={require("../assets/logo_sem_fundo.png")} alt="logo" />
                    </figure>
                    <form onSubmit={LoginUser}>
                        <input placeholder="Login" />
                        <input type="password" placeholder="Senha" />
                        <Link to="/inicial" type="button" className="btn btn-success">Entrar</Link>
                        <Link 
                            type="button" 
                            data-toggle="modal" 
                            data-target="#cadastrarUser"
                        >
                            <FiArrowRight size={16}/> não tenho cadastro!!!
                        </Link>
                    </form>
                </div>
            </section>
            <section className="cadastrar">
                <div className="modal fade" id="cadastrarUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header"> 
                                <h1 className="headers" style={{color: "black"}}><span>#</span>Cadastrar</h1>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <input placeholder="Login" />
                                    <input type="password" placeholder="Senha" />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button 
                                    onClick={CadastrarUser}
                                    type="button" 
                                    className="btn btn-success"
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}