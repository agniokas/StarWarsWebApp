import axios from 'axios';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Films } from '../Types';
import Table from './Table';

import '../sass/main.scss';


const Card: React.FC<{ film: Films }> = ({ film }) => {

    const { episode_id, title, release_date } = film;
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">'{title}'</h2>
                    <p className="card-releaseDate">Release date: </p>
                    <p className="card-releaseDate">{release_date}</p>
                </div>
                <div>
                    <h1 className="card-episode">{episode_id}</h1>
                </div>
                <div>
                    <NavLink
                        to={`/films/${episode_id}`}
                        activeClassName='activeLink'
                    >
                        Show peope
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Card
