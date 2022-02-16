import { useEffect, useState } from "react"
import { getRestaurants } from '../../utils/api'
import { RestaurantCard } from "../../components";
import { Header, PageTitle } from './styled';

export const HomePage = () => {

    const [restaurant, setRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants()
        .then((resposta) => {
            setRestaurants(resposta.response)
        })
    }, []);

    return(
        <>
        <Header />
        <PageTitle>Bem-vindo ao Lista Rango </PageTitle>
        {restaurant.map(restaurant => { 
            return (
                <RestaurantCard key={restaurant.id} name={restaurant.name} address={restaurant.address} />
            )
    })}
        </>
    )
}