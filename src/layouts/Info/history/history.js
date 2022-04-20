import React, {useState, useEffect} from 'react';
import { useProvider } from "../../../model";
import { HistoryDiv, MovieItem, Image, TopDiv,Para, Span, BottomDiv, CardNum } from './historyElements';
import axios from 'axios';
import { map } from "lodash";

const History = () => {
    let id = window.sessionStorage.getItem("id")

    const token = window.sessionStorage.getItem("token")
    const [data, setData] = useState([
        {   username: "username",
            Reservations:{ id: "id", purchase_date: "purchase_date", Screening: {id: 'id', movie_starts: 'movie_starts'}} ,
        }]);
    
    const getData = () => {
        axios.get(`http://localhost:4000/reservations/history/${id}`).then((res) => {
            const reservations = res.data;
            console.log('myReserv', reservations)
            setData((prev) => ({
              ...prev, ...reservations
            }))
            console.log('ApiCall- Reserv', reservations[0].Reservations[0].purchase_date)
        });
        
    }
    useEffect(() => {
        getData()
    }, []);

    //Get Reservation Data
    //Drill Into Reservation and then map over the screenings
    const data2 = data[0]["Reservations"]
    let reservation = map(data2, (item) => {
        console.log('item', item.total_cost )
        return item
    });
    
    
    const [{BASE_URL}] = useProvider([
        "BASE_URL",
      ]);
    
    


    return (
        <HistoryDiv>
            {reservation.map((item, i) => {
                return (
                    <MovieItem>
                        <TopDiv>
                            <div>
                                <Image src={(`${BASE_URL}${item.Screening?.MovieOfTheMonth.Movie.image}`)} />
                            </div>
                            <div>
                                <h2>{item.Screening?.MovieOfTheMonth.Movie.title}</h2>
                                <Para>Duration:<Span>{item.Screening?.MovieOfTheMonth.Movie.duration}</Span></Para>
                                <Para>Genre: <Span>{item.Screening?.MovieOfTheMonth.Movie.genre}</Span></Para>
                                <Para>Release Year: <Span>{item.Screening?.MovieOfTheMonth.Movie.release_year}</Span> </Para>
                                
                            </div>
                            
                        </TopDiv>
                        <BottomDiv>
                            <h2>Booking Info:</h2>
                            <Para>Booking Date:<Span>{item.Screening?.movie_date?.split('T')[0]}</Span> </Para>
                            <Para>Purchase Date: <Span>{item?.purchase_date?.split('T')[0]}</Span></Para>
                            <Para>Total Cost: <Span>{item?.total_cost}</Span></Para>
                            <CardNum>{(i + 1)} / {reservation.length} </CardNum>
                        </BottomDiv>
                        
                        {/* <p>Purchase Date: {item.purchase_date.slice(0, 10)}</p> */}
                        
                    </MovieItem>
                )
            })}
        </HistoryDiv>
    )
}

export default History;