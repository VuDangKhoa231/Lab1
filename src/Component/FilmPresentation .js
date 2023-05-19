import React from 'react'

export default function FilmsPresentation({ films }) {
    return (
        <div className='container'>
            {films.map((film) => (
                <a className='colunm' key={film.id}>
                    <div className='cardFilm'>
                        <img src={film.img}></img>
                        <div className='title'>
                            <h3>{film.title}</h3>
                            <div>
                                <p>{film.year}</p>
                                <p>{film.nation}</p>
                            </div>
                        </div>   
                    </div>
                </a>
            ))}
        </div>
    )
}
