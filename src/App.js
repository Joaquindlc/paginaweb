import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar} from 'react-bootstrap';


function App() {
  return (
    
    <div className="App">
      <Navbar class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Portafolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Joaquin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skils</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</Navbar>
      <header className="App-header">
        
      <Button type="button" class="btn btn-outline-dark">Acceso</Button>
      </header>
    </div>
  );
}

export default App;
