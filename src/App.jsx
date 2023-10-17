import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Tareas } from "./pages/Tareas";
import { FormTareas } from "./pages/FormTareas";
import { Navegacion } from "./components/Navegacion";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
     <div className='container mx-auto'>
     <Navegacion></Navegacion>
      <Routes>
        <Route path='/' element={<Navigate to="/tareas" />}></Route>
        <Route path='/tareas' element={<Tareas />}></Route>
        <Route path='/tareas_crear' element={<FormTareas />}></Route>
        <Route path='/tareas/:id' element={<FormTareas />}></Route>
      </Routes>
      <Toaster></Toaster>
     </div>
    </BrowserRouter>
  )
}

export default App