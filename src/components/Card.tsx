import axios from 'axios';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import { Films } from '../Types';
import Table from './Table';

import '../sass/main.scss';


const Card: React.FC<{ film: Films }> = ({ film }) => {
    // const [people, setPeople] = useState<Person[]>();
    // const [loadingData, setLoadingData] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');

    // const handleClick = async(event: any) => {
    //     event.preventDefault();
    //     fetchPeople();
    // }

    // const fetchPeople = async () => {
    //     setLoadingData(true);
    //         const people: Person[] = await Promise.all(film.characters.map(character => 
    //         axios.get(character)
    //             .then(response => {
    //             const person = response.data                
    //                 return person
    //             })
    //             .catch(error =>{
    //                 setLoadingData(false)
    //                 setError(error.message)
    //             })))
    
    //     setPeople(people);
    //     setLoadingData(false);
    // }

    const { episode_id, title, release_date } = film;
    return (
        <>
            <div className="card">
                <h1 className="card-img-top">{episode_id}</h1>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Release date: {release_date} </p>
                    <Link to={`/films/${episode_id}`} className="btn">Show peope</Link>
                    {/* <button onClick={handleClick}>Show people</button> */}
                </div>
            </div>
            <div>
{/* 
                {loadingData && <LinearProgress color='secondary' />}
                
                {!loadingData && people && <Table people={people}/>
                  } */}
            </div>
        </>
    )
}

export default Card


    // name: person.name,
    // birth_year: person.birth_year,
    // eye_color: person.eye_color,
    // gender: person.gender,
    // height: person.height,
    // mass: person.mass,
    // skin_color: person.skin_color,
    // homeworld: person.homeworld,
    // films: person.films,
    // species: person.species,
    // starships: person.starships,
    // vehicles: person.vehicles,
    // url: person.url,
    // created: person.created,
    // edited: person.edited,