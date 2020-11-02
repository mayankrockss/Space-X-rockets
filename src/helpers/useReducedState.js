import { useReducer } from "reinspect"
import actionTypes from "./actionTypes";

export function useReducedState() {
    const reducer = (state = {}, payload) => {
        let newState = {};
        switch (payload.type) {
            case actionTypes.UPDATE_FLIGHTS:
                newState = { ...state, flights: payload.data }
                break;
            case actionTypes.UPDATE_YEAR_FILTER:
                newState = { ...state, yearFilter: payload.data }
                break;
            case actionTypes.UPDATE_LAUNCH_FILTER:
                newState = { ...state, launchFilter: payload.data }
                break;
            case actionTypes.UPDATE_LANDING_FILTER:
                newState = { ...state, landingFilter: payload.data }
                break;
            default:
                newState = state;
        }
        return newState;
    }
    const initialState = {
        flights: [],
        yearFilter: null,
        launchFilter: null,
        landingFilter: null
    }
    return useReducer(reducer, initialState, undefined, 'Current_State');
}