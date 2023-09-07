import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [location, setLocation] = useState("");
  const [apiData, setApiData] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=351ad0d117f833b96a7ec5f64df173fb`;
  const data = (e) => {
    if (e.key === "Enter") {
      axios
        .get(url)
        .then((response) => {
          setApiData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      // setLocation("");
    }
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="App">
      <div className="mainHeading">
        <h1>Wheather App</h1>
      </div>

      <div className="cardContainer">
        <div className="topCardSection">
          <h3 className="logo">
            city<span>Wheather</span>
          </h3>
          <input
            placeholder="Enter City Name"
            name="city"
            className="serach_input"
            onChange={handleChange}
            onKeyDown={data}
            value={location}
          />
          {location === "" ? <h1>City Name</h1> : <h1>{apiData.name}</h1>}
        </div>
        <div className="bottomCardSection">
          <div className="leftSection">
            <div className="leftSectionElement">
              <p>Temperature</p>
              {apiData.main ? <h4>{apiData.main.temp}</h4> : null}
            </div>
            <div className="leftSectionElement">
              <p>Feels like</p>
              {apiData.main ? <p>{apiData.main.feels_like}</p> : null}
            </div>
            <div className="leftSectionElement">
              <p>Wind Speed</p>
              {apiData.wind ? <p>{apiData.wind.speed}</p> : null}
            </div>
            <div className="leftSectionElement">
              <p>Humidity</p>
              {apiData.main ? <p>{apiData.main.humidity}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
