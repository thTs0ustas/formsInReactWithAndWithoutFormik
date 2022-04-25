import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardContent({ genre }) {
  const navigate = useNavigate();
  return (
    <div className='card-container mb-4'>
      <div className='card border-0'>
        <div className='card-item'>
          <img src={require(`../../assets/imgs/${genre}.jpg`)} width='100%' alt='First slide' />
          <div className='card-body bg-dark text-light'>
            <h1 className='horizontal-line'>{genre.toUpperCase()}</h1>

            <div className='d-grid gap-2 col-6 mx-auto mt-5'>
              <button
                className='btn btn-warning '
                onClick={() => navigate(`/movieByGenre/${genre}`)}
              >
                MORE INFO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
