import React from "react";

import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        {/* Movie poster   */}
        <Card.Img variant="top" src={movie.poster} />

        {/* Top-right  Age Rating Badge    */}
        <Badge bg="black">New</Badge>

        {/* overly content  */}

        <div className="">
          <Button>
            <span>▶</span>Play Trailer
          </Button>

          {/* Movie title*/}
          <Card.Title>{movie.title}</Card.Title>

          {/* */}

          <div>
            <span>🕜{movie.duration}</span> |<span>{movie.rating}</span>
          </div>


          {/* Buy Ticket*/}
          <Button>Buy Ticket</Button>

          {/* More Info */}
          <a href="">More Info →</a>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
