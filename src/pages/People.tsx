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
        const getPeople = async () => await Promise.all(
            [fetchFilms(), fetchPeople()]
        );
        
        getPeople();
    }, [episode_id])

    const fetchFilms = async (): Promise<void> => {
        setLoadingData(true);

        await axios
        .get(`${BaseUrl}films/${episode_id}/`)
            .then(response => {

                const characters = response.data.characters;

                setCharacters(characters)
            })
            .catch(error => {
                setLoadingData(false)
                setError(error.message)
            })
    }

    const fetchPeople = async (): Promise<void> => {
        setLoadingData(true);

            const people: Person[] = await Promise.all(characters.map(character => 
            axios.get(character)
                .then(response => {
                const person = response.data                
                    return person
                })
                .catch(error =>{
                    setLoadingData(false)
                    setError(error.message)
                })))
    
        setPeople(people);
        setLoadingData(false);
    }

    return (
        <div>
            {loadingData && <LinearProgress color='secondary' />}
                
            {!loadingData && people && <Table people={people} />}
            
            {!loadingData && error && <p>{error}</p>}
        </div>
    )
}

export default People
