import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './App.css'

const ApiTest = () => {

    const [joke, setJoke] = useState("")
    const [change, setChange] = useState(0)
    const [category, setCategory] = useState("")

    useEffect(() => {

        if (change === 0) {
            return
        }

        axios.get(
            "https://v2.jokeapi.dev/joke/" + category
        )
        .then((response) => {

            console.log(response.data)

            if (response.data.type === "single") {

                setJoke(response.data.joke)

            } else {

                setJoke(
                    response.data.setup +
                    " " +
                    response.data.delivery
                )

            }

        })
        .catch((error) => {

            console.log(error)

            setJoke(
                "Invalid category. Try Any, Programming, Misc, Dark, Pun, Spooky, or Christmas."
            )

        })

    }, [change])


    const changeJoke = () => {

        if (category.trim() !== "") {
            setChange(change + 1)
        }

    }


    return (

        <div className="joke-page">

            <div className="joke-shell">

                <div className="joke-topbar">

                    <div className="game-lights">

                        <span className="light-red"></span>
                        <span className="light-yellow"></span>
                        <span className="light-blue"></span>

                    </div>

                    <p>PARA KA NAMANG KALOKOHAN BOI</p>

                </div>


                <div className="joke-screen">

                    <div className="screen-tag">
                        SYSTEM ONLINE
                    </div>


                    <h1>
                        JOKE API
                    </h1>


                    <p className="joke-subtitle">
                        CHOOSE A CATEGORY AND LOAD A JOKE
                    </p>


                    <Link
                        className="nav-button"
                        to={"/pokemon"}
                    >
                        GO TO POKÉMON API
                    </Link>


                    <div className="joke-card">

                        <p>

                            {joke === ""
                                ? "NO JOKE LOADED"
                                : joke
                            }

                        </p>

                    </div>


                    <div className="joke-controls">

                        <label>
                            ENTER CATEGORY
                        </label>


                        <input
                            type="text"
                            placeholder="Any / Programming / Pun..."
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                        />


                        <button
                            disabled={category.trim() === ""}
                            onClick={() => {
                                changeJoke()
                            }}
                        >
                            LOAD JOKE
                        </button>

                    </div>


                    <div className="category-help">
                        ANY · PROGRAMMING · MISC · DARK · PUN · SPOOKY · CHRISTMAS
                    </div>

                </div>

            </div>

        </div>

    )

}

export default ApiTest