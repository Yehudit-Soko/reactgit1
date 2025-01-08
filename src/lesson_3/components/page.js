// import { useEffect, useState} from "react"

// function posts() {
//     const [Weather, SetWeather] = useState([]);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try{
//                 const response = await fetch('http://localhost:5154/WeatherForecast');
//                 const data = await response.json();
//                 console.log(data);
//                 SetWeather([...Weather,data]);
//             } catch (error){
//                 console.error('Error fetching Weather:' , error);
//             }
//         };

//         fetchWeather();

//     }, []);
//     return (
//         <>
//             {Weather.map(Element=>
//             {
//                 <p>
//                     {Element}
//                 </p>
//             })}
//         </>
//     )


// };
// export default Weather;