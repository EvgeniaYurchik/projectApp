import { combineReducers } from "redux";

import  { textAction, listAction, listActionFive } from '../actions';

const initialState = {
    city: "Minsk",
    list: [],
    listFiveDays: [],
    listWeatherFirst: [],
    listWeatherSecond: [],
    listWeatherThird: [],
    listWeatherFourth: [],
    listWeatherFifth: [],
    listWeatherFirstDay: [],
    listWeatherSecondDay: [],
    listWeatherThirdDay: [],
    listWeatherFourthDay: [],
    listWeatherFifthDay: []
};

const textReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "CHANGE_CITY":
            return {...state, city: action.payload}
    }

    return state;
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_LIST":
            return {...state, list: action.payload}
    }

    return state;
};

const listReducerFive = (state = initialState, action) => {
    switch (action.type) {
        case "TAKE_LIST_FIVE":
            return {...state, listFiveDays: action.payload}
    }

    return state;
};

const listWeatherFirst = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FIRST":
            return {...state, listWeatherFirst: action.payload}
    }

    return state;
};

const listWeatherSecond = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_SECOND":
            return {...state, listWeatherSecond: action.payload}
    }

    return state;
};

const listWeatherThird = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_THIRD":
            return {...state, listWeatherThird: action.payload}
    }

    return state;
};

const listWeatherFourth = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FOURTH":
            return {...state, listWeatherFourth: action.payload}
    }

    return state;
};

const listWeatherFifth = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FIFTH":
            return {...state, listWeatherFifth: action.payload}
    }

    return state;
};

const listWeatherFirstDay = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FIRST_DAY":
            return {...state, listWeatherFirstDay: action.payload}
    }

    return state;
};

const listWeatherSecondDay = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_SECOND_DAY":
            return {...state, listWeatherSecondDay: action.payload}
    }

    return state;
};

const listWeatherThirdDay = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_THIRD_DAY":
            return {...state, listWeatherThirdDay: action.payload}
    }

    return state;
};

const listWeatherFourthDay = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FOURTH_DAY":
            return {...state, listWeatherFourthDay: action.payload}
    }

    return state;
};

const listWeatherFifthDay = (state = initialState, action) => {
    switch (action.type) {
        case "WEATHER_FIFTH_DAY":
            return {...state, listWeatherFifthDay: action.payload}
    }

    return state;
};

export const root = combineReducers({
    city: textReducer,
    list: listReducer,
    listFiveDays: listReducerFive,
    listWeatherFirst: listWeatherFirst,
    listWeatherSecond: listWeatherSecond,
    listWeatherThird: listWeatherThird,
    listWeatherFourth: listWeatherFourth,
    listWeatherFifth: listWeatherFifth,
    listWeatherFirstDay: listWeatherFirstDay,
    listWeatherSecondDay: listWeatherSecondDay,
    listWeatherThirdDay: listWeatherThirdDay,
    listWeatherFourthDay: listWeatherFourthDay,
    listWeatherFifthDay: listWeatherFifthDay
});
