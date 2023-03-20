//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=
import React, { useState } from "react"
import "./style.css"
import Weathercard from "./weathercard"

const Temperature = () => {
  const [searchValue, setSearchValue] = React.useState("pune")
  const [tempInfo, setTempInfo] = useState({})

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e671f8c8513390bc229e0a18661b8508`

      const response = await fetch(url) //await- returns a promise. either fulfilled or not.
      const data = await response.json() // convert the fetched data

      const { temp, humidity, pressure } = data.main
      const { main: weathermood } = data.weather[0] //destructuring.reassigning name of main as weathermood
      const { name } = data
      const { speed } = data.wind
      const { country, sunset } = data.sys

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      }

      setTempInfo(myNewWeatherInfo)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    getWeatherInfo()
  }, [])

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            className="searchTerm"
            autoFocus
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>

      {/* Temperature card */}
      {/* passing tempInfo as props */}
      <Weathercard tempInfo={tempInfo} />
    </>
  )
}

export default Temperature
