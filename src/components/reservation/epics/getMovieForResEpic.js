import { ofType } from "redux-observable";
import { catchError, map as epicMap, switchMap } from "rxjs/operators";
import { forEach, map, omit } from "lodash";
import { from, of } from "rxjs";
import axios from "axios";
import moment from "moment";
import { actionTypes } from "../../../rModel/actions/actionTypes";
import { BASE_URL } from "../../../constants";
import { setError, setRequests } from "../../../rModel";

const getMovieForResEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.GET_MOVIE_FOR_RESERVATION),
    switchMap(({ payload }) =>
      from(axios.get(`${BASE_URL}/moviesOfTheMonth/reservation/${payload}`)).pipe(
        epicMap(({ data }) => {
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

          return setRequests(dataForRes);
        }),
        catchError((error) => {
          const time = moment().format("HH:mm:ss");
          return of(setError({ message: error.message, time }));
        })
      )
    )
  );

export { getMovieForResEpic };
