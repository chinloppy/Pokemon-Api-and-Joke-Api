import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const LoadPokemon = () => {

    const [allPokemon, setAllPokemon] = useState([])
    const [inputNum, setInputNum] = useState(10)
    const [num, setNum] = useState(10)
    const [change, setChange] = useState(1)
    const [allElement, setAllElement] = useState([])
    const [selectedElement, setSelectedElement] = useState("all")


    useEffect(() => {

        axios.get("https://pokeapi.co/api/v2/type")
        .then((response) => {

            console.log(response.data.results)

            setAllElement(response.data.results)

        })
        .catch((error) => {

            console.log(error)

        })

    }, [])


    useEffect(() => {

        if (selectedElement === "all") {

            axios.get(
                "https://pokeapi.co/api/v2/pokemon?limit=1351"
            )
            .then((response) => {

                console.log(response.data.results)

                const pokemonList = response.data.results.map((pokemon) => {

                    return {
                        pokemon: pokemon
                    }

                })

                setAllPokemon(pokemonList)

            })
            .catch((error) => {

                console.log(error)

            })

        } else {

            axios.get(
                "https://pokeapi.co/api/v2/type/" + selectedElement
            )
            .then((response) => {

                console.log(response.data.pokemon)

                setAllPokemon(response.data.pokemon)

            })
            .catch((error) => {

                console.log(error)

            })

        }

    }, [change])


    return (

        <div className="pokemon-page">

            <div className="pokemon-header">

                <div className="pokeball">
                    <div className="pokeball-line"></div>
                    <div className="pokeball-button"></div>
                </div>

                <h1>
                    POKÉMON API
                </h1>

                <p>
                    Choose a type and discover your Pokémon!
                </p>

                <Link
                    className="nav-button joke-button"
                    to={"/jokes"}
                >
                    GO TO JOKE API
                </Link>

            </div>


            <div className="pokemon-container">

                <h2>
                    Pokédex
                </h2>


                <div className="pokemon-controls">

                    <div className="control-group">

                        <label>
                            Pokémon Type
                        </label>

                        <select
                            value={selectedElement}
                            onChange={(e) => {
                                setSelectedElement(e.target.value)
                            }}
                        >

                            <option value="all">
                                ALL
                            </option>

                            {allElement.map((element, index) => {

                                return (

                                    <option
                                        key={index}
                                        value={element.name}
                                    >
                                        {element.name}
                                    </option>

                                )

                            })}

                        </select>

                    </div>


                    <div className="control-group">

                        <label>
                            Number of Pokémon
                        </label>

                        <input
                            type="number"
                            min="1"
                            max="1351"
                            placeholder="Enter Number"
                            value={inputNum}
                            onChange={(e) => {

                                setInputNum(e.target.value)

                            }}
                        />

                    </div>


                    <button
                        className="load-button"
                        onClick={() => {

                            setNum(inputNum)
                            setChange(change + 1)

                        }}
                    >
                        LOAD POKÉMON
                    </button>

                </div>


                <div className="pokemon-grid">

                    {allPokemon
                    .slice(0, Number(num))
                    .map((element, index) => {

                        return (

                            <Link
                                className="pokemon-card"
                                key={index}
                                to={
                                    "/pokemon/" +
                                    element.pokemon.name
                                }
                            >

                                <div className="pokemon-number">

                                    #{String(index + 1).padStart(3, '0')}

                                </div>

                                <h3>
                                    {element.pokemon.name}
                                </h3>

                                <span>
                                    View Pokédex →
                                </span>

                            </Link>

                        )

                    })}

                </div>

            </div>

        </div>

    )

}

export default LoadPokemon