import React, { useState, useEffect } from 'react';
import axios from "axios";
import tempImg from './images/weather.webp';
import humidityImg from './images/humidity.png';
import windImg from './images/wind.png'

const Home = (props) => {
    const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
    const [data, setData] = useState({});
    let [location, setLocation] = useState()
    const [tabData, setTabData] = useState([]);
    const cities = ["Delhi", "New York", "London", "Tokyo", "Rio", "Cape Town", "Moscow", "Berlin", "Wellington", "Perth"];

    const handleData = () => {
        setLocation(props.city)
        let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${props.city}&rapidapi-key=51868ed371msha2b088847f4d500p14d7b7jsn2189c751c601`;

        axios.get(url).then((response) => {
            
            setData(response.data)
        });
        setLocation('')
    }

    useEffect(() => {
        handleData();
        const fetchData = async () => {
            const fetchedData = [];

            for (const city of cities) {
                const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}&rapidapi-key=51868ed371msha2b088847f4d500p14d7b7jsn2189c751c601`);
                const data = await response.json();
                fetchedData.push(data);
            }

            setTabData(fetchedData);
        };
        fetchData();
    }, [props.city], cities, handleData);



    // useEffect(()=>{

    //     const fetchData = async () => {
    //         const fetchedData = [];

    //         for (const city of cities) {
    //             const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}&rapidapi-key=51868ed371msha2b088847f4d500p14d7b7jsn2189c751c601`);
    //             const data = await response.json();
    //             fetchedData.push(data);
    //         }

    //         setTabData(fetchedData);
    //     };
    //     fetchData();

    // }, []);

    return (
        <>
            <div className="mx-5 my-3">
                <h1 className="my-4 text-center">Weather for {props.city}</h1>
                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3  text-bg-dark">
                                    <h4 className="my-0 fw-normal">Temprature</h4>
                                </div>
                                <div className="card-body">
                                    <img src={tempImg} style={{ height: "55px", width: "60px" }} alt="Temprature" />
                                    <h1 className="card-title pricing-card-title">{data.temp} <small className="text-muted fw-light">
                                        <span>&#8451;</span></small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Temprature: {data.temp} <span>&#8451;</span></li>

                                        <li>Minimum Temprature: {data.min_temp} <span>&#8451;</span></li>
                                        <li>Maximum Temprature: {data.max_temp} <span>&#8451;</span></li>
                                    </ul>
                                    {/* <!-- <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm">
                                <div className="card-header py-3 text-bg-dark">

                                    <h4 className="my-0 fw-normal">Humidity</h4>
                                </div>
                                <div className="card-body">
                                    <img src={humidityImg} style={{ height: "60px", width: "80px" }} alt="Humidity" />
                                    <h1 className="card-title pricing-card-title">{data.humidity}<small className="text-muted fw-light">
                                        %</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        {/* <!-- <li>Cloud PCT is: <span id="cloud_pct"></span></li> --> */}
                                        <li>Wind Degrees: {data.wind_degrees}&deg;</li>
                                        <li>Feels Like {data.feels_like} &#8451;</li>
                                        <li>Humidity: {data.humidity}%</li>
                                    </ul>
                                    {/* <!-- <button type="button" className="w-100 btn btn-lg btn-outline-primary">Get started</button> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm ">
                                <div className="card-header py-3 text-bg-dark">
                                    <h4 className="my-0 fw-normal">Wind & Sunrise-Sunset</h4>
                                </div>
                                <div className="card-body">
                                    <img src={windImg} style={{ height: "60px", width: "60px" }} alt="Wind Info" />
                                    <h1 className="card-title pricing-card-title">{data.wind_speed}<small
                                        className="text-muted fw-light"> km/hr</small></h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Wind Speed: {data.wind_speed} km/h</li>

                                        <li>Sunrise: {new Date(data.sunrise * 1000).toLocaleTimeString()}</li>
                                        <li>Sunset: {new Date(data.sunset * 1000).toLocaleTimeString()}</li>
                                    </ul>
                                    {/* <!-- <button type="button" className="w-100 btn btn-lg btn-outline-primary">Contact us</button> --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="display-6 text-center mb-4"><b>Popular Weathers</b></h2>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "13%", alignItems: "center" }}></th>
                                    <th style={{ width: "7%", alignItems: "center" }}>Temp </th>
                                    <th style={{ width: "8%", alignItems: "center" }}>Feels like </th>
                                    <th style={{ width: "8%", alignItems: "center" }}>Humidity </th>
                                    <th style={{ width: "8%", alignItems: "center" }}>Min temp </th>
                                    <th style={{ width: "8%", alignItems: "center" }}>Max temp </th>
                                    <th style={{ width: "8%", alignItems: "center" }}>Wind speed </th>
                                    <th style={{ width: "9%", alignItems: "center" }}>Wind degrees </th>
                                    <th style={{ width: "9%", alignItems: "center" }}>Sunrise* </th>
                                    <th style={{ width: "9%", alignItems: "center" }}>Sunset* </th>
                                </tr>
                            </thead>
                            <tbody id="weatherData">
                                {tabData.map((data, index) => (
                                    <tr key={index}>
                                        <td><b>{cities[index]}</b></td>
                                        <td>{data.temp}</td>
                                        <td>{data.feels_like}</td>
                                        <td>{data.humidity}</td>
                                        <td>{data.min_temp}</td>
                                        <td>{data.max_temp}</td>
                                        <td>{data.wind_speed}</td>
                                        <td>{data.wind_degrees}&deg;</td>
                                        <td>{new Date(data.sunrise * 1000).toLocaleTimeString()}</td>
                                        <td>{new Date(data.sunset * 1000).toLocaleTimeString()}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                        <p className='text-danger'>* Timings of Sunrise and Sunset are according to IST (Indian Standard Time) format.</p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Home
