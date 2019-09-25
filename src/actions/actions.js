export const textAction = (city) => {
    return {
        type: "CHANGE_CITY",
        payload: city
    };
};

export const listAction = (list) => {
    return {
        type: "TAKE_LIST",
        payload: list
    }
}

export const listActionFive = (list) => {
    return {
        type: "TAKE_LIST_FIVE",
        payload: list
    }
}

export const weatherFirst = (list) => {
    return {
        type: "WEATHER_FIRST",
        payload: list
    }
}

export const weatherSecond = (list) => {
    return {
        type: "WEATHER_SECOND",
        payload: list
    }
}

export const weatherThird = (list) => {
    return {
        type: "WEATHER_THIRD",
        payload: list
    }
}

export const weatherFourth = (list) => {
    return {
        type: "WEATHER_FOURTH",
        payload: list
    }
}

export const weatherFifth = (list) => {
    return {
        type: "WEATHER_FIFTH",
        payload: list
    }
}

export const weatherFirstDay = (list) => {
    return {
        type: "WEATHER_FIRST_DAY",
        payload: list
    }
}

export const weatherSecondDay = (list) => {
    return {
        type: "WEATHER_SECOND_DAY",
        payload: list
    }
}

export const weatherThirdDay = (list) => {
    return {
        type: "WEATHER_THIRD_DAY",
        payload: list
    }
}

export const weatherFourthDay = (list) => {
    return {
        type: "WEATHER_FOURTH_DAY",
        payload: list
    }
}

export const weatherFifthDay = (list) => {
    return {
        type: "WEATHER_FIFTH_DAY",
        payload: list
    }
}
