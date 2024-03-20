import React, { useEffect, useState } from 'react';
import Result from './Result';
import { Restaurant } from './Result';

const Form: React.FC = () => {
    const [type, setType] = useState<string>('');
    const [lat, setLat] = useState<number>(0);
    const [long, setLong] = useState<number>(0);
    const [list, setList] = useState<Restaurant[]>([]);
    const [chart, showChart] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            setLoading(false);

        }, error => {
            console.error("Error Code = " + error.code + " - " + error.message);
        });
    }, []);

    const fetchRestaurants = async () => {
        const url = `http://localhost:3001/search?term=${type}&latitude=${lat}&longitude=${long}`;
        const response = await fetch(url);
        const data = await response.json();
        setList(data.businesses);  
        showChart(true);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchRestaurants();
        console.log(type, lat, long);
        console.log(list)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setType(e.target.value)} />
            <button disabled={loading} type="submit">Submit</button>
            {chart ? <Result list={list} /> : null}
        </form>
    )
}

export default Form;