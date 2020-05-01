import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";
import api from "../api";

import Footer from "../Componets/footer";
import "./style.css";

export default function Login(){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [novoLogin, setNovoLogin] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    const historico = useHistory();
    async function LoginUser(e){
        e.preventDefault();
        const data ={login, senha}

        try {
            const response = await api.post('sessao', data);

            localStorage.setItem('id',response.data.usuario.id);
            localStorage.setItem('login',login);

            historico.push('/inicial');

        } catch (error) {
            alert(`Login ou senha incorretos`);
        }
        
    }

    async function CadastrarUser(e){
        e.preventDefault();
        const data = {login: novoLogin, senha: novaSenha};
        console.log(data);

        try {
            await api.post('usuarios',data);
            setNovaSenha('');
            setNovoLogin('');
            alert('Cadastro feito com sucesso!!!');

        } catch (error) {
            alert('Algo deu errado!')
        }
    }
    return (
        <main>
            <img 
                src={require("../assets/fundo_login.jpg")} 
                alt="fundo login" 
                className="fundo d-none d-lg-block"
            />
            <div className="position-relative">
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
                        <img src={require("../assets/logo_sem_fundo.png")} alt="logo" />
                        <form onSubmit={LoginUser}>
                            <input 
                                placeholder="Login" 
                                value={login}
                                onChange={e => setLogin(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Senha" 
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                            <button  
                                type="submit" 
                                className="btn btn-success"
                            >
                                Entrar
                            </button>
                        </form>
                        <Link 
                            type="button" 
                            data-toggle="modal" 
                            data-target="#cadastrarUser"
                        >
                            <FiArrowRight size={16}/> não tenho cadastro!!!
                        </Link>
                    </div>
                </section>
                <section className="cadastrar">
                    <div 
                        className="modal fade" 
                        id="cadastrarUser" 
                        tabindex="-1" 
                        role="dialog" 
                        aria-labelledby="exampleModalLabel" 
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header"> 
                                    <h1 
                                        className="headers" 
                                        style={{color: "black"}}
                                    >
                                        <span>#</span>Cadastrar
                                    </h1>
                                    <button 
                                        type="button" 
                                        className="close" 
                                        data-dismiss="modal" 
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={CadastrarUser}>
                                        <input 
                                            placeholder="Login" 
                                            value={novoLogin}
                                            onChange={e => setNovoLogin(e.target.value)}
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="Senha" 
                                            value={novaSenha}
                                            onChange={e => setNovaSenha(e.target.value)}
                                        />
                                        <button 
                                            type="submit" 
                                            className="btn btn-success"
                                        >
                                            Cadastrar
                                        </button>
                                    </form>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    )
}