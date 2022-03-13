import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Reservation } from "../presentational/reservation";
import axios from "axios";

const BASE_URL = "http://localhost:4000";
const INITIAL_STATE = {
	cinema: "",
	auditorium: "",
	movie: "",
	screening: "",
	seat: "",
};

function ReservationContainer(WrapComponent) {
	return function WC() {
		const [values, setValues] = React.useState(() => INITIAL_STATE);
		const [response, setResponse] = React.useState(() => null);
		const [cinema, setCinema] = React.useState(() => []);
		const [movies, setMovies] = React.useState(() => []);
		const [auditorium, setAuditorium] = React.useState(() => []);
		const [screening, setScreening] = React.useState(() => []);
		const [seats, setSeats] = React.useState(() => []);

		const navigate = useNavigate();
		const { username } = useParams();

		const price = (
			values.seat ? seats.find((seat) => seat.id == values.seat).cost : 0
		).toFixed(2);

		React.useEffect(() => {
			if (!window.sessionStorage.getItem("token")) {
				navigate("/login");
			} else {
				axios.get(`${BASE_URL}/cinema`).then((response) => {
					setCinema(response.data);
				});
				if (values.cinema) {
					axios.get(`${BASE_URL}/movies`).then((response) => {
						setMovies(response.data);
					});
				}
				if (values.movie) {
					axios.get(`${BASE_URL}/auditorium`).then((response) => {
						setAuditorium(response.data);
					});
				}
				if (values.auditorium) {
					axios.get(`${BASE_URL}/screenings`).then((response) => {
						setScreening(response.data);
					});
				}
				if (values.screening) {
					axios.get(`${BASE_URL}/seats`).then((response) => {
						setSeats(response.data);
					});
				}
			}
		}, [values]);

		useEffect(
			() =>
				response &&
				navigate(`/users/${username}/reservation/ticket`, {
					state: { reservationId: response.Reservations.at(-1).id },
				}),
			[response]
		);

		const handleChange = (event) => {
			setValues((prevState) => ({
				...prevState,
				[event.target.name]: event.target.value,
			}));
		};

		const handleSubmit = async (event) => {
			event.preventDefault();

			const { data } = await axios.post(
				`http://localhost:4000/reservations/users/${username}/new`,
				{
					data: {
						screening_id: +values.screening,
						price: 15,
						seats: [{ id: +values.seat, discount_type: "adult", cost: 15 }],
					},
				}
			);
			console.log(data);
			setResponse(data);

			setValues(INITIAL_STATE);
		};
		const props = {
			handleSubmit,
			movies,
			cinema,
			handleChange,
			response,
			values,
			price,
			auditorium,
			screening,
			seats,
		};

		return <WrapComponent {...props} />;
	};
}
export default ReservationContainer(Reservation);
