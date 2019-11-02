export const SET_COLOR = "SET_COLOR"

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        color
    };
}

export const setInstructor = (instructor) => {
    return {
        type: "SET_INSTRUCTOR",
        instructor 
    };
}