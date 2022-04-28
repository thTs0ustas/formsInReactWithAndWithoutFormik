import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardContent({ genre }) {
  const navigate = useNavigate();

  return (
    <div className='card-container mb-4'>
      <div className='card border-0'>
        <div className='card-item'>
          <img src={require(`../../assets/imgs/${genre}.jpg`)} width='100%' alt='First slide' />
          <div className='card-body bg-black text-light'>
            <h1 className='horizontal-line'>{genre.toUpperCase()}</h1>

            <div className='d-grid gap-2 col-6 mx-auto mt-5'>
              <button
                type='button'
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
CardContent.propTypes = {
  genre: PropTypes.string.isRequired,
};
