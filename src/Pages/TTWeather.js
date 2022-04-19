import "./TTWeather.css";
import React, { Fragment, useEffect, useState, useRef} from "react";
import Weather from "../components/TTWeather/Weather";
import Footer from "../layout/Footer";

export default function App() {
  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [enteredCity, setEnteredCity] = useState("");
  const cityInputRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function (position) {
      //   setLat(position.coords.latitude);
      //   setLong(position.coords.longitude);
      // });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=${enteredCity}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [enteredCity]);


  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredValue = cityInputRef.current.value
    setEnteredCity(enteredValue);
  }

    return (
      <Fragment>
        <header>
          <h1>
          TT Weather App
          </h1>
        </header>
        <div className="App centered grid">
              <div className="ui input">
                <form onSubmit={formSubmitHandler}>
                  <label htmlFor="city">
                    City: 
                    <div className="ui input">
                    <input
                      type="text"
                      id="city"
                      ref={cityInputRef}
                    />
                    </div>
                  </label>
                  <button className="ui button">Submit</button>
                </form>
              </div>
          {typeof data.main != "undefined" ? (
            <Weather weatherData={data} />
          ) : (
            <div>
              {/* <Dimmer active>
                <Loader>Loading..</Loader>
              </Dimmer> */}
            </div>
          )}
        </div>
        <Footer />
      </Fragment>
    );
  };
