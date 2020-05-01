import React, {useState, useEffect} from "react";
import { Link, useParams} from "react-router-dom";
import { FiPlusSquare } from "react-icons/fi"
import Header from "../Componets/header";
import Footer from "../Componets/footer";
import "./style.css";
import api from "../api";


export default function Detalhes(){
    const { id_manga } = useParams();
    const [volumes, setVolumes] = useState([]);
    const [manga, setManga] = useState([]);

    useEffect(() => {
        api.get(`detalhes/${id_manga}`)
        .then(response => {
            setVolumes(response.data.volumes);
            setManga(response.data.manga);
        })
    },[id_manga]);

    return (
        <main>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-4 imagem">
                        <img 
                            src={require(`../img/${id_manga}.jpg`)} 
                            alt={manga.nome}
                        />    
                    </div>
                    <div className="col-8 detalhes">
                        <strong>{manga.nome}</strong><br />
                        <small>{manga.autor}</small>
                        <p>
                            {manga.descricao}
                        </p>
                        <div className="detalhes">
                            <strong>Vol.   </strong>
                            {volumes.map(volume => (
                                <Link to="/ler" className="btn btn-light">{volume.volume}</Link>
                            ))}    
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