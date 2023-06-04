import { Container, Grid, Paper } from '@mui/material';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../Theme/ThemeContext';

export default function FilmsPresentation({ films }) {
    const { theme } = useContext(ThemeContext)
    return (
      
        <Container maxWidth='100%' sx={{backgroundColor: theme.backgroundColor}}>
            <Grid container spacing={2} p='30px 0px' >
                {films.map((film, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                            <Link to={`detail/${film.id}`}>
                                <div className='cardFilm'>
                                    <img src={film.img} className='filmImg'></img>
                                    <div className='title'>
                                        <h3>{film.title}</h3>
                                        <div>
                                            <p>{film.year}</p>
                                            <p>{film.nation}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
