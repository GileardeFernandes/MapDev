import React, { useEffect,useState } from 'react';
import api from './server/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem';
import FormDev from './components/FormDev';
function App() {

  const [listDev,setListDev] = useState([]);
  
  useEffect(() => {   
    async function handleDev(){
      const  data =   await  api.get('/devs');
      console.log(data.data);
      setListDev(data.data);
    }
    handleDev();
  },[]);


  async function addDev(data){
    const dev = await api.post('/devs',data);
    setListDev([...listDev,dev.data]);
  }

   function removeDev(_id){
    const index = listDev.findIndex(item => item._id === _id);
     var newList = [...listDev];
     newList.splice(index,1);
     setListDev([...newList]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <FormDev  onsubmit={addDev}/>
      </aside>

      <main>
        <ul>
          {listDev.map(dev => <DevItem  key={dev._id}  dev={dev} removeDev={removeDev}/>)}
        </ul>
      </main>
    </div>
  );
}

export default App;
