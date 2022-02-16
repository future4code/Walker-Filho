import axios from 'axios';

export const getRestaurants = async () => {
    let error;
    let response;
    try {
        const { data } = await axios.get('https://challange.goomer.com.br/restaurants')
        response = data;
    } catch(e) {
        error = e;
    }
    return {
        error,
        response
    }
}