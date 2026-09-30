import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ApiTest from './ApiTest'
import LoadPokemon from './PokemonApi/LoadPokemon'
import ShowOne from './PokemonApi/ShowOne'

const AppController = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Navigate to="/pokemon" />} />

        <Route path='/jokes' element={<ApiTest />} />

        <Route path='/pokemon' element={<LoadPokemon />} />

        <Route path='/pokemon/:pname' element={<ShowOne />} />

      </Routes>
    </BrowserRouter>
  )
}

export default AppController