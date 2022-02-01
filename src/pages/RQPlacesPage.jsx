import {useQuery} from "react-query";
import axios from "axios";
import {onError, onSuccess} from "../utils/toast-notification";

const fetchPlaces = () => axios.get('http://localhost:4000/places');

export const RQPlacesPage = () => {

    const {isLoading, data, error, isError, isFetching, refetch} = useQuery('places-query', fetchPlaces, {
        // cacheTime: 5000, Nos indica el tiempo que la petición estará en caché, por defecto 5 minutos
        // staleTime: 0,
        // refetchOnMount: true, Nos indica que react-query ejecute la petición cada vez que el componente se monta
        // refetchOnWindowFocus: true,
        // refetchInterval: 500000 Nos permite definir el tiempo en que queremos que se realice la peticion automáticamente
        // refetchIntervalInBackground: true Nos permite decirle a React Query que así se cambie de página siempre se ejecute la petición
        // enabled: false
        onSuccess,
        onError,
        select: (data) => {
            return data.data.map((place) => ({
                city: place.city,
                id: place.id
            }));
        }
    });

    console.log({isLoading, isFetching, data});

    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div className="container">
            <h2>RQ Places Page</h2>
            <ul>
                {/*                {data?.data.map(place => {
                    return <li key={place.id}>{place.city}</li>
                })}*/}
                {data.map(place => {
                    return <li key={place.id}>{place.city}</li>
                })}
            </ul>
            <button onClick={() => refetch()}>Fetch places</button>
        </div>
    )

};
