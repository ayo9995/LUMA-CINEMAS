import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard'; 


const ComingSoon = () => {

          const movies = [
            { 
                id : 1,
             title:"conjuring last rite",
             rating :"16+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5WLsgB99lCh4jrz34H7gxEvrrMMsB8mrLCdN1Myf4mw&s=10' ,
           
  
            },
             {
                id : 2,
             title:"crawler",
             rating :"16+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Nm3IqX-emdGyrc95fIFZjfd0SxOlnHPAG4NMAlfYMQ&s=10' ,
            },
             {
                id : 3,
             title:"godzilla",
             rating:"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrILzmgFAOPwYT1qR44cboU82NlynYd77k85s4OcH5VQ&s=10' ,
            },
             {
                id : 4,
             title:"dracular",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuk6JoXNTG62KN3X2ECfCYP_ShXWptZB9P6Gj-lLTmOQ&s=10' ,
            },  
             {
                id : 5,
             title:"your mother your mother your mother",
             rating :"16+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3dTiKtJVUEVFGZUTDNBTCHBQGmZj5NUqs3iB1JIffA&s=10' ,
            },
             {
                id : 6,
             title:"street fighter",
             rating :"PG",
            duration:'2h 20min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsduth2wdzkSKc3gGwYxgf7o30p39VyR4MDr5d-dBssQ&s=10' ,
            },
           
      
          ]

  return (
    <div>
    <section className='now-showing  text-white py-5 px-0'>
         <Container fluid>


            <div>
               
                <h1>Coming Soon</h1>
            </div>

      <Row>
        {movies.map((movie) => (
            <Col lg={2} key={movie.id}>


            
        <MovieCard movie={movie} />
            </Col>
        ))}
      </Row>

         </Container>
    </section>
    </div>
  )
}

export default ComingSoon