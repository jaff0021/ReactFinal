import {FETCH_SUCCESS, GET_DETAILS, TO_LIST, LOAD_DATA} from "../actions/actions";
import {RESTAURANTS, DETAILS, LOAD} from '../../pages';

export default function reactFinal(state, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {
        case FETCH_SUCCESS:
            newState = Object.assign({},loadRestaurantData(newState, action.restaurants));
            break;
        case TO_LIST:
            newState = Object.assign({}, toList(newState));
            break;
        case GET_DETAILS:
            newState = Object.assign({}, getDetails(newState, action.id));
            break;
        case LOAD_DATA:
            newState = Object.assign({}, load(newState, action.id));
            break;
        default:
            return state;
    }
    return newState;
}

function getDetails(newState, id){
    newState.page = DETAILS;
    let restaurant = newState.restaurants.find(item => item.id == id ? true : false);
    newState.selectedRestaurant = restaurant;
    return newState;
}

function loadRestaurantData(newState, restaurants){
    newState.page = RESTAURANTS;
    newState.restaurants = restaurants;
    return newState;
}

function load(newState){
    newState.page = LOAD;
    return newState;
}


function toList(newState){
    newState.page = RESTAURANTS;
    newState.selectedRestaurant = undefined;
    return newState;
}