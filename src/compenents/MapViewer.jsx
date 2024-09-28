import React, { useEffect, useState } from "react";
import "../css/Test.css";
import SideBar from "./SideBar";
import { IoIosSearch } from "react-icons/io";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { FaVectorSquare } from "react-icons/fa6";
import Map from "./Map";
import defaultMap from "../images/default.png";
import mumChennaiMap from "../images/mumChennai.jpg";
import mumVishakhaMap from "../images/mumVIshakha.jpg";
import chenVishakhaMap from "../images/chenVishakha.jpg";
import imgMap from "../images/mum_lak.png"


function MapViewer() {
  const pathCoordinates = [
    [19.0759, 72.8777], // Mumbai
    [18.9124, 75.7873], // Mid
    [17.6868, 83.2186], // Vishakhapatanam (example)
  ];

  const [selectedFactor, setSelectedFactor] = useState("All");
  const [start, setStart] = useState("");
  const [dest, setDest] = useState("");

  const [mapImg, setMapImg] = useState(defaultMap);
  const [response, setResponse] = useState('');

  const handleStart = (e) => {
    setStart(e.target.value);
  };

  const handleDest = (e) => {
    setDest(e.target.value);
  };

  

  const factors = [
    { text: "Wind" },
    { text: "Waves" },
    { text: "Cyclone" },
    { text: "Fuel" },
    { text: "All" },
  ];

  // const ports = ["Mumbai", "Lakshdweep", "Maldives"];
  const ports = ["Mumbai", "Chennai", "Vishakhapatnam"]

  const handleSelect = (e) => {
    console.log(e);
    setSelectedFactor(e);
  };

  const showMap = () => {
    if (
      (start === "Mumbai" && dest === "Chennai") ||
      (start === "Chennai" && dest === "Mumbai")
    ) {
      setMapImg(mumChennaiMap);
    } else if ((start === "Mumbai" && dest === "Vishakhapatnam") ||
    (start === "Vishakhapatnam" && dest === "Mumbai")){
      setMapImg(mumVishakhaMap);
    } else if((start === "Vishakhapatnam" && dest === "Chennai") ||
    (start === "Chennai" && dest === "Vishakhapatnam")){
      setMapImg(chenVishakhaMap);
    }else{
      setMapImg(defaultMap)
    }
  }



  const handleSubmit = async ()=>{
    console.log(start, dest)

    const data = {start,dest};

    console.log(data);
    showMap()

    // try {
    //   const res = await fetch('http://127.0.0.1:5000/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await res.json();
    //   console.log(result);
    //   setResponse(result); // Handle the response here
    // } catch (error) {
    //   console.error('Error:', error);
    // }






  }
  


  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <img
            // src="https://www.incois.gov.in/images/logo.png"
            src="https://incois.gov.in/portal/images/esso.png"
            alt="ESSO Logo"
          />
          {/* <span className="esso-text">ESSO</span> */}
        </div>

        <div className="title">
          <h1>ESSO - Indian National Centre for Ocean Information Services</h1>
          <p>
            (An Autonomous Body under the Ministry of Earth Sciences, Govt. of
            India)
          </p>
        </div>
        <div className="g20-logo">
          <img
            src="https://incois.gov.in/portal/images/g20-logo.png"
            width={"80px"}
            height={"40px"}
            alt="G20 Logo"
          />
          <img
            src="https://www.incois.gov.in/images/logo.png"
            width={"50px"}
            height={"50px"}
            alt="G20 Logo"
          />
        </div>
      </header>
      <div className="upper-links">
        <ul>
          <li>Hindi</li> |<li>Home</li> |<li>Annual Reports</li> |
          <li>Vacancies</li> |<li>Tenders</li> |<li>Library</li> |
          <li>Feedback</li> |<li>Sitemap</li> |<li>Contact Us</li>
        </ul>
      </div>
      <nav className="nav">
        <ul>
          <li>Organisation</li>
          <li>Services</li>
          <li>Data & Information</li>
          <li>Ocean Observations</li>
          <li>Modelling & Research</li>
          <li>Satellite Oceanography</li>
          <li>ITCOocean</li>
        </ul>
      </nav>
      <main className="main">
        <SideBar />
        <div className="content">
          <div className="content-heading">
            <span>Home {">"} </span>
            <span>Navigation Ports</span>
          </div>
          <div className="search-bar">
            <select value={start} onChange={handleStart}>
              <option>Starting Port</option>
              {ports.map((port, index) => {
                return (
                  <option
                    value={port}
                    key={index}
                    
                  >
                    {port}
                  </option>
                );
              })}
            </select>
            <select value={dest} onChange={handleDest}>
              <option>Destination Port</option>
              {ports.map((port) => {
                return (
                  <option
                    value={port}
                  >
                    {port}
                  </option>
                );
              })}
            </select>
            <div className="factor-div">
              <span style={{ marginRight: "15px" }}>Factors:</span>
              <div className="factors">
                {factors.map((factor) => (
                  <button
                    style={{
                      backgroundColor:
                        selectedFactor === factor.text
                          ? "white"
                          : "transparent",
                    }}
                    onClick={() => {
                      handleSelect(factor.text);
                    }}
                  >
                    {factor.text}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={()=>{handleSubmit()}} className="search-icon">
              <IoIosSearch />
            </button>
          </div>

          <div className="map">
            {/*<img className="mapImg" src={imgMap} alt="" />*/}
            <img className="mapImg" src={mapImg} alt="" />
            {/* <Map pathCoordinates={pathCoordinates} /> */}
          </div>
        </div>
      </main>
      {/* <footer className="footer">
        <p>
          © 2023 INCOIS - Indian National Centre for Ocean Information Services
        </p>
      </footer> */}
    </div>
  );
}

export default MapViewer;
