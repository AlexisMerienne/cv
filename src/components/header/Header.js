import React from "react";
import './Header.css'
import photoProfil from '../../assets/photo-profil.jpg'


class Header extends React.Component {
    render(){
        return(
            <div className="container-header" shadow-green="">
                <div className="title-picture">
                    <div className="title">
                        <h1>Alexis Mérienne</h1>
                        <h4><p>Etudiant en M2 de sciences informatiques</p>
                        <p>à l'<a href="https://polytech.univ-cotedazur.fr/">école universitaire Polytechnique de Nice-Sophia</a></p></h4>
                    </div>
                    <div className="picture">
                        <img className="photo-profil" src={photoProfil} alt="Alexis Merienne" width="150"/>
                    </div>
                </div>
                <div className="content-list">
                    <ol>
                        
                            <li><div className="direction-into-page"><h5 onClick={function() {document.getElementById("container-project").scrollIntoView();}}>Mes projets</h5></div></li>
                            <li><div className="direction-into-page"><h5 onClick={function() {document.getElementById("container-competences").scrollIntoView();}}>Mes compétences</h5></div></li>
                            <li><div className="direction-into-page"><h5 onClick={function() {document.getElementById("ex-pro-container").scrollIntoView();}}>Mes expériences</h5></div></li>
                            <li><div className="direction-into-page"><h5 onClick={function() {document.getElementById("interets").scrollIntoView();}}>Mes centres d'intérêts</h5></div></li>
                   
                    </ol>
                </div>
            </div>
        )
    }
}

export default Header;