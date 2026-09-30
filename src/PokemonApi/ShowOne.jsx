import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const ShowOne = () => {

    const { pname } = useParams()

    const [thePokemon, setThePokemon] = useState({})

    useEffect(() => {

        axios.get(
            "https://pokeapi.co/api/v2/pokemon/" + pname
        )
        .then((response) => {

            console.log(response.data)

            setThePokemon(response.data)

        })
        .catch((error) => {

            console.log(error)

        })

    }, [pname])


    return (

        <div className="pokemon-detail-page">

            <Link
                className="back-button"
                to={"/pokemon"}
            >
                ← BACK TO POKÉDEX
            </Link>


            <div className="pokedex-card">

                <div className="pokedex-top">

                    <div className="blue-light"></div>

                    <div className="small-light red"></div>
                    <div className="small-light yellow"></div>
                    <div className="small-light green"></div>

                </div>


                <div className="pokedex-screen">

                    <p className="pokedex-small-title">
                        POKÉDEX ENTRY
                    </p>

                    <h1>

                        POKÉDEX FOR{" "}

                        <span>
                            {thePokemon.name}
                        </span>

                    </h1>


                    <div className="pokemon-image-container">

                        {thePokemon.sprites && (

                            <img
                                className="main-pokemon-image"
                                src={
                                    thePokemon.sprites.other[
                                        "official-artwork"
                                    ].front_default
                                    ||
                                    thePokemon.sprites.front_default
                                }
                                alt={thePokemon.name}
                            />

                        )}

                    </div>


                    <div className="pokemon-info">

                        <div className="info-box">

                            <span>
                                HEIGHT
                            </span>

                            <strong>
                                {thePokemon.height}
                            </strong>

                        </div>


                        <div className="info-box">

                            <span>
                                WEIGHT
                            </span>

                            <strong>
                                {thePokemon.weight}
                            </strong>

                        </div>

                    </div>


                    <div className="pokemon-sprites">

                        {thePokemon.sprites &&
                            thePokemon.sprites.front_default && (

                            <img
                                src={
                                    thePokemon.sprites.front_default
                                }
                                alt={thePokemon.name}
                            />

                        )}


                        {thePokemon.sprites &&
                            thePokemon.sprites.back_default && (

                            <img
                                src={
                                    thePokemon.sprites.back_default
                                }
                                alt={thePokemon.name}
                            />

                        )}


                        {thePokemon.sprites &&
                            thePokemon.sprites.front_shiny && (

                            <img
                                src={
                                    thePokemon.sprites.front_shiny
                                }
                                alt={thePokemon.name}
                            />

                        )}


                        {thePokemon.sprites &&
                            thePokemon.sprites.back_shiny && (

                            <img
                                src={
                                    thePokemon.sprites.back_shiny
                                }
                                alt={thePokemon.name}
                            />

                        )}

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ShowOne