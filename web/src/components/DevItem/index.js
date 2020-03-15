import React from 'react';
import api from '../../server/api';
import './styles.css';


function DevItem({dev, removeDev}) {

    async function deleteDev(_id){ 
       const data =  await  api.delete('/devs',{
          headers:{_id},
          });
       console.log(data.data);
       removeDev(_id);
    } 

    return (
        <>
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs ? dev.techs.join(', ') : ''}</span>
                </div>
            </header>
            <a id="linkDelete" onClick={() => deleteDev(dev._id)}>Delete Dev</a>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} >Acessar perfil no Github</a>
        </li>
        </>
    )
}

export default DevItem;