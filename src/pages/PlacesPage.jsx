import axios from "axios";
import {useEffect, useState} from "react";

export const PlacesPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:4000/places').then(res => {
            setData(res.data)
            setIsLoading(false)
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });
    }, [])

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div className="container">
            <h2>Places Page</h2>
            <ul>
                {data.map(place => {
                    return <li key={place.id}>{place.city}</li>
                })}
            </ul>
        </div>
    )

};
