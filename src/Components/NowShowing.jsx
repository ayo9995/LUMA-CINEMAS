import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard'; 


const NowShowing = () => {

          const movies = [
            { 
                id : 1,
             title:"AVENGER DOOMSDAY",
             rating :"16+",
            duration:'2h 00min',
            poster: 'poster.jpg' ,
           
  
            },
             {
                id : 2,
             title:"AVENGER SECRET WARS",
             rating :"16+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReB8c-CLgPMDSizBt6-tDMtgrrj2qRS7SWA3hSSuTfdQ&s=10' ,
            },
             {
                id : 3,
             title:"KAROSHI",
             rating:"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfQlDkZnG-BMhc0Ut542i9g024vPJdxRu8F2REKVHDsA&s=10' ,
            },
             {
                id : 4,
             title:"THE HUNGER GAMES",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://images.openai.com/static-rsc-4/dBB8btvXUG1QiponyAvDhK7Cy_ZJTxeyfozUQOoujKUHovU4iGZhrFHD3WchRJrGO4bLEteFXo9ktxshvHmsJYqhhCzMqiMhHJ97XEZXNiwzwUOyfer75lTad8SzlcHnOnMuXP-uMUVg2CUZP8Agr3D8u15EuriMGUiiLp0oKbT5ZSmu7tNBw1sNqrjGZ-Kp?purpose=fullsize' ,
            },  
             {
                id : 5,
             title:"THE BATMAN2",
             rating :"16+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-nra0cwVs3JmVSKFTMEz67gCmQX3FV9OE5IpHjmcQg&s=10' ,
            },
             {
                id : 6,
             title:"SHREK 5",
             rating :"PG",
            duration:'2h 20min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgoHdEhN_SUwwy2wX-lGOzUXP24brXpp9FD4GO444mtw&s=10' ,
            },
             {
                id : 7,
             title:"Angry Bird 3",
             rating :"PG",
            duration:'1h 30min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Iu_TXrbRiXpuvBXBgAFDxRQqoa8qb6a6HbPRZ9p7hg&s=10' ,
            },
             {
                id : 8,
             title:"CHILDREN OF BLOOD AND BONE",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrCrxe2mFi01gtYQuq8zXvDoSoi9gB-2yEc8HadYPag&s=10' ,
            },
            {
                id : 9,
             title:"MOANA",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIa-axpaphc_Ks2IgTgcW0qqa1AVfLr3G1tGVurNAT3Q&s=10' ,
            },
            {
                id : 10,
             title:"Micheal",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRpQqNlrKgGuUKHvfjRwGDE8d28-N3ZznJfQcG9UWBQ&s=10' ,
            },
            {
                id : 11,
             title:"Ramayana",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfKopX35dj_bYL4ZhlbCYS6v91sU20_VUoG5-JM678w&s=10' ,
            },
            {
                id : 12,
             title:"The Drama",
             rating :"18+",
            duration:'2h 00min',
            poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRRXLwP3qZWn_X8_6xjsd_pdOGauBN8WxGw1DFH-Tz-g&s=10' ,
            },
      
          ]

  return (
    <div>
    <section className='now-showing bg-black text-white py-5 px-0'>
         <Container fluid>


            <div>
                <p>Experience the Magic</p>
                <h2>Now Showing</h2>
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

export default NowShowing