import React from "react";
import { FiSearch } from "react-icons/fi"

export default function Pesquisar(){
    function pesquisar(e){
        e.preventDefault();
    }
    return (
        <div className="pesquisa">
            <form className="form-inline" onSubmit={pesquisar}>
                <input className="form-control mr-sm-2" type="search" placeholder="Nome do Mangá" aria-label="Pesquisar" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><FiSearch size={22} /></button>
            </form>
        </div>
    )
}