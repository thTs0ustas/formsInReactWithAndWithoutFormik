import React, { useCallback, useEffect, useState } from "react";
import { selectors, useProvider } from "../../../model";
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
import axios from "axios";
import { map } from "lodash";

const History = () => {
  const [{ userInfo, BASE_URL }] = useProvider([selectors.userInfo, selectors.url]);

  const [data, setData] = useState([
    {
      username: "username",
      Reservations: {
        id: "id",
        purchase_date: "purchase_date",
        Screening: { id: "id", movie_starts: "movie_starts" },
      },
    },
  ]);

  const getData = useCallback(() => {
    axios.get(`${BASE_URL}/reservations/history/${userInfo.id}`).then((res) => {
      const reservations = res.data;
      setData((prev) => ({
        ...prev,
        ...reservations,
      }));
    });
  }, [userInfo.id]);
  useEffect(() => {
    getData();
  }, [getData]);

  const data2 = data[0]["Reservations"];
  let reservation = map(data2, (item) => item);

  return (
    <HistoryDiv>
      {map(reservation, (item, i) => {
        return (
          <MovieItem key={item.id}>
            <TopDiv>
              <div>
                <Image src={`${BASE_URL}${item.Screening?.MovieOfTheMonth.Movie.image}`} />
              </div>
              <div>
                <h2>{item.Screening?.MovieOfTheMonth.Movie.title}</h2>
                <Para>
                  Duration:<Span>{item.Screening?.MovieOfTheMonth.Movie.duration}</Span>
                </Para>
                <Para>
                  Genre: <Span>{item.Screening?.MovieOfTheMonth.Movie.genre}</Span>
                </Para>
                <Para>
                  Release Year: <Span>{item.Screening?.MovieOfTheMonth.Movie.release_year}</Span>{" "}
                </Para>
              </div>
            </TopDiv>
            <BottomDiv>
              <h2>Booking Info:</h2>
              <Para>
                Booking Date:<Span>{item.Screening?.movie_date?.split("T")[0]}</Span>{" "}
              </Para>
              <Para>
                Purchase Date: <Span>{item?.purchase_date?.split("T")[0]}</Span>
              </Para>
              <Para>
                Total Cost: <Span>{item?.total_cost}</Span>
              </Para>
              <CardNum>
                {i + 1} / {reservation.length}{" "}
              </CardNum>
            </BottomDiv>

            {/* <p>Purchase Date: {item.purchase_date.slice(0, 10)}</p> */}
          </MovieItem>
        );
      })}
    </HistoryDiv>
  );
};

export default History;
