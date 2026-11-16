import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';


const NowShowing = () => {

          const movies = [
            {
                id : 1,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 2,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 3,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 4,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 5,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 6,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 7,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
             {
                id : 8,
             title:"Avenger",
             ratings:"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
            },
            

          ]

  return (
    <div>
    <section>
         <Container>


            <div>
                <p>Experience the Magic</p>
                <h2>Now Showing</h2>
            </div>

      <Row>
        {movies.map((movie) => (
            <Col key={movie.id}>


            
        <MovieCard movie={movie} />
            </Col>
        ))}
      </Row>

         </Container>
    </section>
    </div>
  )
}

export default NowShowing