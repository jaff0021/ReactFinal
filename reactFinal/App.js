import React from "react";
import Index from "./src/components/Index"
import { createStore, applyMiddleware, compose } from "redux";
import reactFinal from "./src/reducers/reducers";
import {RESTAURANTS} from "./pages";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Index/>
            </Provider>
        );
    }
}

let state = {
    restaurants: [],
    selectedRestaurant: undefined,
    page: RESTAURANTS
};

let store = createStore(reactFinal, state, compose(
    applyMiddleware(thunk)));