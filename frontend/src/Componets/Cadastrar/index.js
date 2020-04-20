import React, { useState } from "react";
import api from "../../api";
import "./style.css";

export default function Cadastrar(){
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const id = localStorage.getItem('id');

    async function cadastrarManga(){
        const data = {nome, autor, descricao};
        
        try {
            await api.post('mangas', data, { 
                headers:{
                    Authorization: id
                }
            });
            setDescricao('');
            setNome('');
            setAutor('');
            alert('Cadastro feito com sucesso!!!');
        } catch (error) {
            alert('Erro ao cadastrar!!!');
        }
    }
    
    return (
        <section className="cadastrar">
            <div>
                <button 
                    type="button" 
                    className="btn btn-primary" 
                    data-toggle="modal" 
                    data-target="#cadastrarManga"
                >
                    Cadastrar
                </button>
            </div>
            <div 
                className="modal fade" 
                id="cadastrarManga" 
                tabindex="-1" role="dialog" 
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
                                <span>
                                    #
                                </span>
                                Cadastrar
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
                            <form onSubmit={cadastrarManga}>
                                <input 
                                    placeholder="Nome do Mangá"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)} 
                                />
                                <input 
                                    placeholder="Autor do Mangá"
                                    value={autor}
                                    onChange={e => setAutor(e.target.value)}
                                />
                                <textarea 
                                    placeholder="Descrição"
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                /><br />
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
    )
}
