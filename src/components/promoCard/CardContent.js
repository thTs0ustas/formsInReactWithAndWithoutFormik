import React from "react";

export default function CardContent({ movieByGenre }) {
  return (
    <div className='card-container'>
      {movieByGenre.map((item) => {
        console.log(item);
        const { id, title, description, image } = item;
        return (
          <div className='card' key={id}>
            <div className='card-item'>
              <img src={`http://localhost:4000/${image}`} width='100%' alt='First slide' />
              <div className='card-body bg-dark text-light'>
                <h1 className='horizontal-line'>{title}</h1>
                <p className='card-text mt-4'>{description}</p>
                <div className='d-grid gap-2 col-6 mx-auto mt-5'>
                  <button className='btn btn-warning ' type='submit'>
                    BOOK TICKET
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
