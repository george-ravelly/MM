import React from "react";
import {FiUser} from "react-icons/fi";
import { Link } from "react-router-dom";
import Cadastrar from "./Cadastrar";
import Pesquisar from "./Pesquisar";
import "./style.css";

export default function Header(){
    return(
        <header>
            <div className="container-header">
                <Link to="/" style={{backgroundColor: "#e3f2fd", border: 0}}>
                    <h1>Meus<strong>Mangás</strong></h1>
                </Link>
                <ul>
                    <li>
                        <Link to="/mangas">Mangás</Link>
                        <Link to="/favoritos">Favoritos</Link>
                        <Link to="/perfil"><FiUser size={40} color="gray"/></Link>
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