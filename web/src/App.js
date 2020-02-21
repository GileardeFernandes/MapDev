import React, { useEffect,useState } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (erro) => {
        console.log(erro);
      },
      {
        timeout: 30000
      }     
    );
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="username_github">Usuário do Github</label>
            <input name="username_github" id="username_github" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>


          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
                     name="latitude" 
                     id="latitude"
                     value={latitude}
                     onChange={e => setLatitude(e.target.value)}
                     required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number"
                     name="longitude"
                     id="longitude" 
                     value={longitude}
                     onChange={e => setLongitude(e.target.value)}
                     required />
            </div>
          </div>

          <button type="submit">
            Salvar
         </button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55728068?s=460&v=4" alt="Micael Fernandes" />
              <div className="user-info">
                <strong>Micael Fernandes</strong>
                <span>React, React native, Node.js</span>
              </div>
            </header>
            <p> Dev na Procenge saude, amando cada vez mais as melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/GileardeFernandes" >Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55728068?s=460&v=4" alt="Micael Fernandes" />
              <div className="user-info">
                <strong>Micael Fernandes</strong>
                <span>React, React native, Node.js</span>
              </div>
            </header>
            <p> Dev na Procenge saude, amando cada vez mais as melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/GileardeFernandes" >Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55728068?s=460&v=4" alt="Micael Fernandes" />
              <div className="user-info">
                <strong>Micael Fernandes</strong>
                <span>React, React native, Node.js</span>
              </div>
            </header>
            <p> Dev na Procenge saude, amando cada vez mais as melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/GileardeFernandes" >Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55728068?s=460&v=4" alt="Micael Fernandes" />
              <div className="user-info">
                <strong>Micael Fernandes</strong>
                <span>React, React native, Node.js</span>
              </div>
            </header>
            <p> Dev na Procenge saude, amando cada vez mais as melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/GileardeFernandes" >Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/55728068?s=460&v=4" alt="Micael Fernandes" />
              <div className="user-info">
                <strong>Micael Fernandes</strong>
                <span>React, React native, Node.js</span>
              </div>
            </header>
            <p> Dev na Procenge saude, amando cada vez mais as melhores tecnologias de desenvolvimento web e mobile.</p>
            <a href="https://github.com/GileardeFernandes" >Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
