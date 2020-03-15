import React, { useState, useEffect } from 'react';
import './styles.css';

function FormDev({ onsubmit }) {

    const [user_Github, setuser_Github] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
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

    async function addDev(e) {
        e.preventDefault();
        await onsubmit({
            github_username: user_Github,
            techs,
            latitude,
            longitude
        });
        setuser_Github('');
        setTechs('');
    }


    return (
        <form onSubmit={addDev}>
            <div className="input-block">
                <label htmlFor="username_github">Usuário do Github</label>
                <input name="username_github"
                    id="username_github"
                    value={user_Github}
                    onChange={e => setuser_Github(e.target.value)}
                    required />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Tecnologias</label>
                <input name="techs"
                    id="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)}
                    required />
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
    )

}

export default FormDev;