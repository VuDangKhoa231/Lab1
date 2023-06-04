import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfFilm } from '../Shared/ListOfFilm';

export default function DetailFilm() {
    const filmId = useParams();
    const filmData = ListOfFilm.find(obj => {
        return obj.id == filmId.id;
    });


    return (
        <div className='detail-container'>
            <img src={`../${filmData.img}`} className='detailBackground' />
            <div className='content'>

                <img src={filmData.img} className='filmImg'></img>
                <div className=''>
                    <h1> Movie: {filmData.title}</h1>
                    <div className='detail'>
                        <h4>Brown: <span className='small-text'>{filmData.type === 1 ? 'Phim Bộ' : 'Phim lẻ'}</span> </h4>
                        <h4>Year: <span className='small-text'>{filmData.year}</span></h4>
                        <h4>Director: <span className='small-text'>{filmData.director}</span></h4>
                        <h4>Actor/Actress: <span className='small-text'>{filmData.actor.name}</span> </h4>
                        <h4>Genre: <span className='small-text'> {filmData.genre.join(', ')}</span> </h4>
                        <h4>Nation: <span className='small-text'>{filmData.nation}</span></h4>
                        <h4>Description: <span className='small-text'>{filmData.description}</span> </h4>
                    </div>
                </div>

            </div>
        </div>
    )
}
