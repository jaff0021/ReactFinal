import axios from "axios";
export const LOAD_DATA = 'LOAD_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const GET_DETAILS = 'GET_DETAILS';
export const TO_LIST = 'TO_LIST';

export function loadData(){
    return {
        type: LOAD_DATA
    }
}

export function fetchSuccess(data){
    return {
        type: FETCH_SUCCESS,
        restaurants: data
    }
}

export function getDetails(id){
    return {
        type: GET_DETAILS,
        id: id
    }
}

export function toList(){
    return {
        type: TO_LIST
    }
}

export function getGeolocalizedList() {
    return (dispatch)=> {
        dispatch(loadData(true));
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(loadData(false));
                dispatch(fetchRestaurantList(position.coords.latitude, position.coords.longitude));
            },
            (error) => {
                console.log("Error", error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function fetchRestaurantList(lat, long) {
    return (dispatch) => {
        const API_KEY = 'Lyl-olXv-2qImv8Sum6PRhdSQrik2ruRVlEFOfXYOBfAjaYesMOJgaXEAlicNe-Rb78ONgaCBhhDoYThRrkZMMGXO4_JW5pTXa9Zqi45riWrxfGKjfF-EkTkOJ5VWnYx';
        let url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&latitude='+lat+'&longitude='+long+'&sort_by=distance';
        axios.get(url, {headers: {Authorization: 'Bearer ' + API_KEY}})
            .then((response)=> {
                if (response.status != 200) {
                    throw Error(response.statusText);
                }
                return response;
            }).then((response) => {
            dispatch(fetchSuccess(response.data.businesses));
        });
    };
}
