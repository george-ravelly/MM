import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function UltAdd(){
    const [ultManga, setUltManga] = useState([]);

    useEffect(() => {
        api.get('ultimoVol',{
            headers: {
                Authorization: id
            }
        }).then(response => {
            setUltManga(response.data);
        })
    })
    return(
        <div className="col-12 col-lg-3 historico">
            <h1 className="headers"><span>#</span>Último adicionado</h1>
            <div>
                <img 
                    src={require("../img/1.jpg")} 
                    alt="one" 
                />
                <Link 
                    to="/detalhes" 
                    className="text-uppercase"
                >
                    <strong 
                        style={{maxWidth: "250px"}} 
                        className="d-block text-truncate"
                    >
                        one punch
                    </strong>
                </Link>
            </div>         
        </div>
    )
}