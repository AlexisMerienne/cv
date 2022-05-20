import React from "react";
import FlipCard from "../flipcard/FlipCard";
import './Competences.css'





class Competences extends React.Component{

    state = {
        technique : {
            label : "Technique",
            content :  
            <ul>
                <li>Langages : Java, Python, C, C++</li>
                <li>Framework  : Vue.js, Angular, (React)</li>
                <li>Mobile : Android Studio</li>
            </ul>
        },
        pratique : {
            label : "Pratique",
            content : 
            <ul>
                <li>Science des données :  introduction à l’IA, Machine Learning, valorisation des données.</li>
                <li>Software: architecture logicielle, Conception logicielle, IHM</li>
            </ul>
        },
        langue : {
            label : "Langue",
            content : 
            <ul>
                <li>Anglais B2 - Score TOEIC : 955/995</li>
                <li>Allemande B1</li>
                <li>Italien A2</li>
            </ul>
        }
    }

    render() {
        return (
            <div className="container-competences" id="container-competences" shadow-green="">
                <div className="title">
                    <h2>Mes compétences</h2>
                </div>
                <div className="flip-card-row">
                    <FlipCard data={this.state.technique}/>
                    <FlipCard data={this.state.pratique}/>
                    <FlipCard data={this.state.langue}/>
                </div>
            </div>
        )
    }
}

export default Competences;