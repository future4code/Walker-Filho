import { useEffect, useState } from "react"
import { getRestaurants } from '../../utils/api'

export const HomePage = () => {

    const [restaurants, getRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
        .then(response => console.log(response))
    }, []);

    return(
        <>
        <h1>Home</h1>
        {restaurants.map(restaurants => <p>{JSON.stringify(restaurants)}</p>)}
        </>
    )
}