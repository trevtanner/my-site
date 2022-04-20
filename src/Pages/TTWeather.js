import "./TTWeather.css";
import React, { Fragment, useEffect, useState, useRef} from "react";
import Weather from "../components/TTWeather/Weather";
import Footer from "../layout/Footer";
import { Container, Paper } from '@mui/material'
import Header from "../components/TTWeather/Header";



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
      <>
        <Header />
          <Container sx={{ pt: '2em', pb: '2em', height: '70.2vh'}} className="body">
        <div className="App centered grid">
              <Paper elevation={12} sx={{ mb: '2em', p: '.5em', background: '#01579B', color: 'white' }}>
                <form onSubmit={formSubmitHandler}>
                  <label htmlFor="city">
                    City: 
                    <div>
                    <input
                      type="text"
                      id="city"
                      ref={cityInputRef}
                    />
                    </div>
                  </label>
                  <button>Submit</button>
                </form>
              </Paper>
          {typeof data.main != "undefined" ? (
            <Weather weatherData={data}/>
          ) : (
            <div>
              {/* <Dimmer active>
                <Loader>Loading..</Loader>
              </Dimmer> */}
            </div>
          )}
        </div>
        </Container>
        <Footer />
      </>
    );
  };
