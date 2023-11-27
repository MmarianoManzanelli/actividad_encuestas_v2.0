import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from "./components/Inicio";
import CrearEncuesta from "./components/CrearEncuestas";
import Encuesta from "./components/Encuesta";
import Menu from "./components/Menu";
import NotFound from "./components/NotFound";
import encuestas from "./data/encuesta.json";

function App() {

const [listaEncuestas,setListaEncuestas]=
useState(encuestas);
const agregarEncuesta =  (nuevaEncuesta) => {
  nuevaEncuesta.id = listaEncuestas.length + 1
  setListaEncuestas ([...listaEncuestas, nuevaEncuesta]);
};

  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element ={<Inicio
      listaEncuestas={listaEncuestas} />} />
      <Route path="/encuesta/crear" element={<CrearEncuesta
      agregarEncuesta={agregarEncuesta} />} />
      {/*<Route path="encuesta/ :id" element={<Encuesta
      listaEncuestas={listaEncuestas}
      responderEncuesta={responderEncuesta} />} /> */}

    <Route path="*" element={<NotFound />}  />
    </Routes>
    </BrowserRouter>
  );
}
     
export default App;
