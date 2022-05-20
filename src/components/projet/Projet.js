import React from "react";
import './Projet.css'




class Projet extends React.Component{

    render() {
        return(
            <div className="container-projet" id="container-project" shadow-green="">
                <div className="title">
                    <h2>Mes Projets</h2>
                    <h5>
                        <ul>
                            <li>
                                <a href="https://mon-impact-numerique.web.app">Mon Impact Numérique</a>
                                <h6>Développement d'un outil de calcule des émissions de gaz à effet de serre du numérique.</h6>
                            </li>
                            <li>
                                <a href="https://i3sgroupeco2.netlify.app/">Low tech website</a>
                                <h6>Design du site du groupe de travail CO2 d'I3S sous une forme low-tech, c'est à dire en diminuant la taille des images et en minimisant la taille des pages webs.</h6>
                            </li>
                        </ul>
                    </h5>
                </div>
            </div>
        )
    }

}


export default Projet;