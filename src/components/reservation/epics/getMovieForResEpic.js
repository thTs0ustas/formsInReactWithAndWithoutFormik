import { ofType } from "redux-observable";
import { catchError, switchMap } from "rxjs/operators";
import { forEach, map, omit } from "lodash";
import { from, mergeMap, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { actionTypes } from "../../../features/actions/actionTypes";
import { BASE_URL } from "../../../constants";
import { setError, setInputValues, setRequests } from "../../../features";

const getMovieForResEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIE_FOR_RESERVATION),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/moviesOfTheMonth/reservation/${payload}`)).pipe(
        mergeMap(({ data }) => {
          const time = moment().format("HH:mm:ss");
          if (data.message) return setError({ message: data.message, time });
          const seats = {};
          const reservedSeats = {};
          const {
            movie: { Movie },
            screenings,
            auditoriums,
          } = data;

          forEach(auditoriums, (item) => {
            seats[item.id] = item.Seats;
          });
          forEach(screenings, (item) => {
            reservedSeats[item.id] = item.ReservedSeats;
          });

          const dataForRes = {
            movies: Movie,
            cinemas: map(auditoriums, (item) => item.Cinema),
            auditoriums: map(auditoriums, (item) => omit(item, ["Cinema", "Seats"])),
            screenings: map(screenings, (item) => omit(item, ["ReservedSeats"])),
            seats,
            reservedSeats,
          };

          return of(
            setRequests(dataForRes),
            setInputValues({ name: "movie", value: dataForRes.movies.title })
          );
        })
      )
    ),

    catchError((error) => {
      const time = moment().format("HH:mm:ss");
      return of(setError({ message: error.message, time }));
    })
  );

export { getMovieForResEpic };
