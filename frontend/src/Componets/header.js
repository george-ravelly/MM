import React from "react";
import {FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";
import Cadastrar from "./Cadastrar";
import Pesquisar from "./Pesquisar";
import "./style.css";

export default function Header(){
    function logoutUser(){
        localStorage.clear();
    }
    return(
        <header>
            <div className="container-header">
                <Link to="/inicial" style={{backgroundColor: "#e3f2fd", border: 0}}>
                    <h1>
                        <img 
                            src={require("../assets/logo_sem_fundo.png")} 
                            width="80" 
                            alt="logo"
                        />
                        Meus<strong>Mangás</strong>
                    </h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/mangas">Mangás</Link>
                        <Link to="/favoritos">Favoritos</Link>
                        <Link to="/" onClick={logoutUser}><FiLogOut size={40} color="gray"/></Link>
                    </li>
                </ul>
            </div>
            <div className="barra">
                <Pesquisar />
                <Cadastrar />                
            </div>
        </header>
    )
}