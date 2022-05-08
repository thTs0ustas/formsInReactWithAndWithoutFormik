import React from "react";
import { isEmpty } from "lodash";
import { MainPhoto } from "./PagePhoto/MainPhoto";
import { MainText } from "./PageText/MainText";
import { PlaceholderComp } from "./placeholder/placehorlder";
import { useMoviePage } from "./hooks/useMoviePage";

function MoviePageContainer() {
  const { movie, screenings, id } = useMoviePage();

  return (
    <div>
      <MainPhoto image={movie?.image} title={movie?.title} />
      {isEmpty(movie) ? (
        <PlaceholderComp />
      ) : (
        <MainText movie={movie} screenings={screenings} id={Number(id)} />
      )}
    </div>
  );
}

export { MoviePageContainer };
