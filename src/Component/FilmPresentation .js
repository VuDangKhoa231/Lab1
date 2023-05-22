import React, { useState } from 'react'

export default function FilmsPresentation({ films }) {
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleClickOpen = (film) => {
        setSelectedFilm(film);
    };

    const handleClose = () => {
        setSelectedFilm(null);
    };

    return (
        <div className='container'>
            {films.map((film) => (
                <div className='colunm' key={film.id}>
                    <div className='cardFilm' onClick={() => handleClickOpen(film)}>
                        <img src={film.img} className='filmImg'></img>
                        <div className='title'>
                            <h3>{film.title}</h3>
                            <div>
                                <p>{film.year}</p>
                                <p>{film.nation}</p>
                            </div>
                        </div>
                    </div>
                    {selectedFilm && selectedFilm.id === film.id && (
                        <div className='modal'>
                            <div className='modal-content'>
                                
                                <div className='modalContent'>
                                    <img src={film.img} className='filmImg'></img>
                                    <div className='description'>
                                        <h1> Movie: {film.title}</h1>
                                        <div className='detail'>
                                            <h4>Brown: <span className='small-text'>{film.type === 1 ? 'Phim Bộ' : 'Phim lẻ'}</span> </h4>
                                            <h4>Year: <span className='small-text'>{film.year}</span></h4>
                                            <h4>Director: <span className='small-text'>{film.director}</span></h4>
                                            <h4>Actor/Actress: <span className='small-text'>{film.actor}</span> </h4>
                                            <h4>Genre: <span className='small-text'> {film.genre}</span> </h4>
                                            <h4>Nation: <span className='small-text'>{film.nation}</span></h4>
                                            <h4>Description: <span className='small-text'>{film.description}</span> </h4>
                                        </div>

                                    </div>
                                </div>
                                <div className='modalFooter'>
                                    <button onClick={handleClose}>Close</button>
                                </div>


                            </div>

                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}
