import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

import Card from '../components/Card';
import People from './People';
import { Films } from '../Types';

const BaseUrl = 'https://swapi.dev/api/';


const Films: React.FC<{}> = () => {
    const [films, setFilms] = useState<Films[]>();
    const [loadingData, setLoadingData] = useState<boolean>(true);
    const [error, setError] = useState<string>('');


    useEffect(() => {
        const fetchFilms = async (): Promise<void> => {
            setLoadingData(true);
            await axios.get(`${BaseUrl}films/`)
                .then(response => {
                    const films = response.data.results;

                    setFilms(films)
                
                    setLoadingData(false);
                })
                .catch(error => {
                    setLoadingData(false)
                    setError(error.message)
                })
        }
      
        fetchFilms();
    }, []);
    
    return (
        <div className='films-container'>
            <div className='films-container_data'>

                { loadingData &&  <LinearProgress className='progressBar' color='secondary'/> }

                { !loadingData && films && films.map((film, index) => <Card key={index} film={film} />) }

                { !loadingData && error && <p className='error'>{error}</p> }
            </div>
            <div className='films-container_peope'>
                <Switch>
                    <Route path='/films/:episode_id'><People /></Route>
                </Switch>
                
            </div>
        </div>
    )
}

export default Films
