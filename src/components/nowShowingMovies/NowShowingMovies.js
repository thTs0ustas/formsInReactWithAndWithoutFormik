import React, { useState } from "react";
import {
    ColStyled,
    MoviesMonthImg,
    ShowingToday,
} from "../moviesOfTheMonth/styledComponents/styles";
import { useNowShowingMovies } from "./hooks/useNowShowingMovies";
import { useProvider } from "../../model";
import { chunk, map } from "lodash";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { NowShowingContainer, NowShowingStacker, NowShowingStack } from "./styledComponents/styles";

export const NowShowingMovies = () => {

    useNowShowingMovies()
    const [state, dispatch] = useProvider();


    return (
        <>
            <ShowingToday>
                <Row className='flex-wrap'>
                    {map(state.homepage.movies[0], ({ Movie: { id, title, genre, image } }) =>
                        <ColStyled key={id} md={4} sm={6} xs={12}>
                            <NowShowingContainer>
                                <NowShowingStacker>
                                    <NowShowingStack>
                                        <Link to={`/moviePage/${id}`}><MoviesMonthImg src={`${state.BASE_URL}${image}`} /></Link>
                                        <p>{genre.replace(/^\w/, (c) => c.toUpperCase())}</p>
                                        <h2><Link to={`/moviePage/${id}`}>{title}</Link></h2>
                                    </NowShowingStack>
                                </NowShowingStacker>
                            </NowShowingContainer>
                        </ColStyled>
                    )}
                </Row>
            </ShowingToday>
        </>
    )
}