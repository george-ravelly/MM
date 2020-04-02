import React from "react";
import "./style.css";

export default function Cadastrar(){
    return (
        <section className="cadastrar">
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#cadastrarManga">
                    Cadastrar
                </button>
            </div>
            <div className="modal fade" id="cadastrarManga" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <input placeholder="Nome do Mangá" />
                                <input placeholder="Autor do Mangá" />
                                <input placeholder="Número do Volume" />
                                <textarea placeholder="Descrição" /><br />
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
