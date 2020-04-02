import React from "react";
import "./style.css";
import { FiGithub } from "react-icons/fi";

export default function Footer(){
    return (
        <footer>
            <adress>
                Criado por George Ravelly<br/>
                <a href="https://github.com/George1050" target="blank">
                    <FiGithub size={24} />GitHub
                </a>
            </adress>
        </footer>
    )
}