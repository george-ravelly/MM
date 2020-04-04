import React from "react";
import { Link } from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi"
import Header from "../Componets/header";
import Footer from "../Componets/Footer";
import "./style.css";


export default function Detalhes(){
    return (
        <main>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4 imagem">
                        <img src={require("../img/one punch.jpg")} alt="nome manga" />
                    </div>
                    <div className="col-8 detalhes">
                        <strong>One Punch Man</strong>
                        <p>
                            Mollit aliquip aute sunt consectetur duis ea dolore mollit 
                            occaecat tempor commodo dolor ullamco ullamco. Pariatur 
                            commodo aliquip aliqua ut commodo anim sunt exercitation 
                            dolor do. Ipsum tempor fugiat id laborum ex ipsum. Sunt tempor 
                            duis deserunt labore fugiat irure mollit sit dolore deserunt. 
                            Ut qui duis nisi anim laboris exercitation id. Fugiat deserunt 
                            elit eiusmod cupidatat non nisi tempor id proident minim 
                            excepteur. Deserunt consectetur consectetur nisi et incididunt 
                            Lorem nostrud.
                        </p>
                        <div className="detalhes">
                            <strong>Vol.</strong><br />
                            <Link to="/ler" className="btn btn-light">01</Link>
                            <Link to="/ler" className="btn btn-light">02</Link>
                            <Link to="/ler" className="btn btn-light">03</Link>
                            <Link to="/ler" className="btn btn-light">04</Link>
                            <Link to="/ler" className="btn btn-light">05</Link>
                            <Link to="/ler" className="btn btn-light">06</Link>
                            <Link to="/ler" className="btn btn-light">07</Link>
                            <Link to="/ler" className="btn btn-light">08</Link>
                            <Link to="/ler" className="btn btn-light">09</Link>
                            <Link to="/ler" className="btn btn-light">10</Link>
                            <button className="btn btn-link">
                                <FiPlusSquare size={40} color="white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}