// import React from "react";
//
// import axios from "axios";
//
// const INITIAL_STATE = {
//   cinema: "",
//   auditorium: "",
//   movie: "",
//   screening: "",
//   seat: "",
// };
// const BASE_URL = "http://localhost:4000";
// export const useReservations = () => {
//   const [values, setValues] = React.useState(() => INITIAL_STATE);
//   const [response, setResponse] = React.useState(null);
//   const [cinema, setCinema] = React.useState([]);
//   const [movies, setMovies] = React.useState([]);
//
//   // const price = seats.reduce((sum, value) => sum + value).toFixed(2);
//
//   console.log(values);
//   React.useEffect(() => {
//     axios.get(`${BASE_URL}/cinema`).then((response) => {
//       setCinema(response.data);
//     });
//     if (values.cinema) {
//       axios.get(`${BASE_URL}/movies`).then((response) => {
//         setMovies(response.data);
//       });
//     }
//   }, [values]);
//
//   const handleChange = (event) => {
//     setValues((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//   };
//
//   const handleSubmit = (event) => {
//     event.preventDefault();
//
//     axios
//       .post("http://localhost:4000/users/create", values)
//       .then((res) => setResponse(res.data));
//
//     setValues(INITIAL_STATE);
//   };
//
//   return {
//     values,
//     handleChange,
//     cinema,
//     movies,
//     handleSubmit,
//     response,
//     // price
//     // auditorium,
//     // screening,
//     // seats,
//   };
// };
