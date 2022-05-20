import './App.css';
import Header from './components/header/Header'
import Projet from './components/projet/Projet';
import Competences from './components/competences/Competences';
import ExperiencePro from './components/experiencepro/ExperiencePro';
import Interets from './components/interets/Interets';
import Player from './components/deezer/Player';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <Header/>
        <Projet/>
        <Competences/>
        <ExperiencePro/>
        <Interets/>
        <Player/>
      </div>
    </div>
  );
}
export default App;
