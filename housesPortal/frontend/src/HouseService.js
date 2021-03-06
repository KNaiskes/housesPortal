import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class HousesService{

    constructor(){}


    getHouses() {
        const url = `${API_URL}/api/houses/`;
        return axios.get(url).then(response => response.data);
    }
    getHouseByURL(link){
        const url = `${API_URL}${link}`;
        return axios.get(url).then(response => response.data);
    }
    getHouse(pk) {
        const url = `${API_URL}/api/houses/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getHouseImages(pk) {
        const url = `${API_URL}/api/houses/images/${pk}`;
        return axios.get(url).then(response => response.data);
    }
    getLandlords() {
        const url = `${API_URL}/api/houses/landlords/`;
        return axios.get(url).then(response => response.data);
    }
    getLandlord(pk) {
        const url = `${API_URL}/api/houses/landlords/${pk}`;
        return axios.get(url).then(response => response.data);
    }
}
