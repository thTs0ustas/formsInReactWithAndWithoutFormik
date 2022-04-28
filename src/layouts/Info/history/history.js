import React, { useEffect } from "react";
import { map } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  BottomDiv,
  CardNum,
  HistoryDiv,
  Image,
  MovieItem,
  Para,
  Span,
  TopDiv,
} from "./historyElements";
import { BASE_URL } from "../../../constants";
import getHistoryAction from "../actions/getHistoryAction";

function History() {
  const { id, history } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHistoryAction(id));
  }, []);

  const data2 = history?.[0]?.Reservations;
  const reservation = map(data2, (item) => item);

  return (
    <HistoryDiv>
      {map(reservation, (item, i) => (
        <MovieItem key={item?.id}>
          <TopDiv>
            <div>
              <Image src={`${BASE_URL}${item?.Screening?.MovieOfTheMonth.Movie.image}`} />
            </div>
            <div>
              <h2>{item?.Screening?.MovieOfTheMonth.Movie.title}</h2>
              <Para>
                Duration:<Span>{item?.Screening?.MovieOfTheMonth.Movie.duration}</Span>
              </Para>
              <Para>
                Genre: <Span>{item?.Screening?.MovieOfTheMonth.Movie.genre}</Span>
              </Para>
              <Para>
                Release Year: <Span>{item?.Screening?.MovieOfTheMonth.Movie.release_year}</Span>{" "}
              </Para>
            </div>
          </TopDiv>
          <BottomDiv>
            <h2>Booking Info:</h2>
            <Para>
              Booking Date:<Span>{item?.Screening?.movie_date?.split("T")[0]}</Span>{" "}
            </Para>
            <Para>
              Purchase Date: <Span>{item?.purchase_date?.split("T")[0]}</Span>
            </Para>
            <Para>
              Total Cost: <Span>{item?.total_cost}</Span>
            </Para>
            <CardNum>
              {i + 1} / {reservation.length}
            </CardNum>
          </BottomDiv>
        </MovieItem>
      ))}
    </HistoryDiv>
  );
}

export default History;
