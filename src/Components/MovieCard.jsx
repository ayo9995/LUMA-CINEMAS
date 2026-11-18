import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card className='movie-card position-relative border-0'>
        {/* Movie poster   */}
        <Card.Img variant="top" src={movie.poster} alt={movie.title}  />

        {/* Top-right  Age Rating Badge    */}
        <Badge bg="black" className='movie-rating position-absolute top-0 end-0 m-2 p-3'>{movie.rating}</Badge>

        {/* overly content  */}

        <div className="movie-overlay">

          <div className='text-center'>
          <Button variant='danger' size='sm'>
            <span>▶</span>Play Trailer
          </Button>
          </div>
<div className='bg-black text-white h-100 mt-2 '>
          {/* Movie title*/}
          <Card.Title className="all-caps">{movie.title}</Card.Title>

          {/* */}

          <div className="dur">
            <span>🕜{movie.duration}</span> |<span>{movie.rating}</span>
          </div>
<div>
<div className="text-center border-top border-secondary mt-0 py-3">
          {/* Buy Ticket*/}
          <Button className="ticket">Buy Ticket</Button>
          </div>
<div>
          {/* More Info */}
          <a href="" className="more-info">More Info →</a>
          </div>
          
  
          </div>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
