import { useEffect, useState } from "react"
import { getRestaurants } from '../../utils/api'
import { RestaurantCard, SearchBox } from "../../components";
import { Header, PageTitle, RestaurantCardContainer } from './styled';

export const HomePage = () => {

    const [restaurant, setRestaurants] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const onChangeSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    }

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
        <SearchBox value={searchTerm} onChange={onChangeSearchTerm}/>
        <RestaurantCardContainer>
            {restaurant.map(restaurant => { 
                    return (
                        <RestaurantCard key={restaurant.id} name={restaurant.name} address={restaurant.address} />
                    )
                })}
        </RestaurantCardContainer>
        </>
    )
}