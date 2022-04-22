import React from "react";

export default function CardContent({ genre }) {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='card-item'>
          <img
            src={require("../../assets/imgs/movie-theater.jpg")}
            width='100%'
            alt='First slide'
          />
          <div className='card-body bg-dark text-light'>
            <h1 className='horizontal-line'>{genre.toUpperCase()}</h1>
            {/*<p className='card-text mt-4'>{description}</p>*/}
            <div className='d-grid gap-2 col-6 mx-auto mt-5'>
              <button className='btn btn-warning '>MORE INFO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
