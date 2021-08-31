import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';

import Person, { Films } from '../Types';
import Table from '../components/Table';

const BaseUrl = 'https://swapi.dev/api/';

interface Params {
    episode_id: string
}

const People: React.FC<{}> = () => {
    const { episode_id } = useParams<Params>();

    const [people, setPeople] = useState<Person[]>();
    const [loadingData, setLoadingData] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [characters, setCharacters] = useState<[]>([]);

    useEffect(() => {
        fetchPeople();
    }, [episode_id])

    const fetchPeople = async (): Promise<void> => {
        setLoadingData(true);

        await axios
        .get(`${BaseUrl}films/${episode_id}/`)
            .then(response => {
                setCharacters(response.data.characters);
                return response.data.characters
            })
            .then(async (characters) => {
                const people: Person[] = await Promise.all(characters.map((character: string)  => 
                    (axios.get(character)
                        .then(response => {
                        const person = response.data                
                            return person
                        })
                )))
                setPeople(people);
                setLoadingData(false);
                })
            .catch(error => {
                setLoadingData(false)
                setError(error.message)
            })
    }

    return (
        <div className='people'>
            {loadingData && <LinearProgress color='secondary' className='progressBar' />}
                
            {!loadingData && people && <Table people={people} />}
            
            {!loadingData && error && <p className='error'>{error}</p>}
        </div>
    )
}

export default People
