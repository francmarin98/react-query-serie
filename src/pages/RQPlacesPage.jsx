import {useQuery} from "react-query";
import axios from "axios";

const fetchPlaces = () => axios.get('http://localhost:4000/places');

export const RQPlacesPage = () => {

    const {isLoading, data, error, isError} = useQuery('places-query', fetchPlaces);

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError){
        return <h2>{error.message}</h2>
    }

    return (
        <div className="container">
            <h2>RQ Places Page</h2>
            <ul>
                {data?.data.map(place => {
                    return <li key={place.id}>{place.city}</li>
                })}
            </ul>
        </div>
    )

};
