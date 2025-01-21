import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes} from "react-router";
import Login from './Pages/Login';
import Crud_U from './Pages/Crud_U';
import Crud_Len from './Pages/Crud_Len';
import Welcome from './Pages/Welcome';
import Crud_L from "./Pages/Crud_L";
import Crud_Clas from "./Pages/Crud_Clas";
import Crud_A from './Pages/Crud_A';
import Crud_Edit from "./Pages/Crud_Edit";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/Welcome' element ={<Welcome />}/>
          <Route path="/Crud usuarios" element={<Crud_U />} />
          <Route path='/Crud libros' element={<Crud_L/>}/> 
          <Route path='/Crud clasificaciones' element = {<Crud_Clas/>}/>
          <Route path='/Crud autores' element = {<Crud_A/>}/>
          <Route path="/Crud lenguajes" element={<Crud_Len />} />
          <Route path='/Crud editoriales' element ={<Crud_Edit/>}/>
        </Routes>
  );
}

export default App;
