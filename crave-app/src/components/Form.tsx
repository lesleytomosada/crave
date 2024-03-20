import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { Restaurant } from './Chart';

const Form: React.FC = () => {
    const [type, setType] = useState<string>('');
    const [lat, setLat] = useState<number>(0);
    const [long, setLong] = useState<number>(0);
    const [list, setList] = useState<Restaurant[]>([]);
    const [chart, showChart] = useState<boolean>(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

        }, error => {
            console.error("Error Code = " + error.code + " - " + error.message);
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetchRestaurants();
        console.log(type, lat, long);
        console.log(list)
    }

    const fetchRestaurants = async () => {
        const url = `http://localhost:3001/search?term=${type}&latitude=${lat}&longitude=${long}`;
        const response = await fetch(url);
        const data = await response.json();
        setList(data.businesses);  
        showChart(true);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setType(e.target.value)} />
            <button type="submit">Submit</button>
            {chart ? <Chart list={list} /> : null}
        </form>
    )
}

export default Form;