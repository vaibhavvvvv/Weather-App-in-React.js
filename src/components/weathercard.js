import React from "react"

const Weathercard = ({ tempInfo }) => {
  const [climateLogo, setClimateLogo] = React.useState("")

  console.log(tempInfo)
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo

  //converting seconds into time
  let seconds = sunset
  let date = new Date(seconds * 1000)
  let timeStr = `${date.getHours()}:${date.getMinutes()}`

  React.useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setClimateLogo("wi-day-cloudy")
          break
        case "Haze":
          setClimateLogo("wi-fog")
          break
        case "Clear":
          setClimateLogo("wi-day-sunny")
          break
        case "Mist":
          setClimateLogo("wi-dust")
          break

        default:
          setClimateLogo("wi-day-sunny")
          break
      }
    }
  }, [weathermood])

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${climateLogo} `}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM
                <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard
