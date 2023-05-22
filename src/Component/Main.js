import React, { Component } from 'react'

import { ListOfFilm as Films } from '../../src/Shared/ListOfFilm'

import FilmsPresentation from './FilmPresentation ';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: Films
        }
    }
    render() {
        return (
            <>
                <FilmsPresentation films={this.state.films} />
            </>
        )
    }
}

export default Main;