import React from "react";
import "./ExperiencePro.css"




class ExperiencePro extends React.Component{

    render(){
        return (
            <div className="ex-pro-container" id="ex-pro-container" shadow-green="">
                <div className="title">
                    <h2>Mes expériences professionnelles</h2>
                </div>
                <div className="ex-pro-container" shadow="">
                    <h6>&#x25CF; Mars 2021 - Mai 2022 - <strong>Groupe CO2 I3S</strong> - Stage -  					3 mois<ul/></h6>
                    <p>
                        - Développement d'un <strong><a href="https://mon-impact-numerique.web.app">outil de mesure de l'impact carbone du numérique</a></strong><br/>
                        - Site statique en Vue.js<br/>
                        - Elaboration d'un premier prototype en python<br/>
                        - travail en <strong>autonomie</strong><br/>
                    </p>
                    <h6>&#x25CF; Octobre 2021 - Janvier 2022 - <strong>Alter Alsace Energie</strong> - Stage -  					4 mois<ul/></h6>
                    <p>
                    - Chargé de développer une <strong>application web de suivi de consommation</strong><br/>
                    - travail en association<br/>
                    - travail en <strong>autonomie</strong><br/>
                    </p>
                    <h6>&#x25CF; Juillet 2020 - <strong>SIDEL</strong> - Travail d’été - 1 mois</h6>
                    <p>
                        - développement d'<strong>applications mobiles pour localisation interne</strong><br/>
                        - <strong>recherche documentaire</strong><br/>
                        - travail en autonomie<br/>
                    </p>
                    <h6>&#x25CF; Juillet 2021 - MATCH Bischeim - Travail d’été - 1 mois</h6>
                    <p>
                        - Employé au rayon fruits et légumes<br/>
                        - <strong>travail en équipe</strong><br/>
                        - relation client<br/>
                    </p>
                    <h6>&#x25CF; Juillet 2018 - La coccinelle, <strong>maraîcher BIO</strong> - Ouvrier agricole - 1 mois</h6>
                    <p>
                        - Cueillette, désherbage, plantation<br/>
                        - Travail au sein d’une <strong>équipe</strong><br/>
                    </p>
                </div>
            </div>
        );
    }

}

export default ExperiencePro;