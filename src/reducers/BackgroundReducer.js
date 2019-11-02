//import * as ACTIONS from "../actions/BackgroundActions";
import * as COLORS from '../constants/BackgroundColors'
import {setInstructor} from '../actions/BackgroundActions' 

const defaultBackgroundState = {
    color: COLORS.BLUE_LIGHT,
    cur_instructor: "All"
}

const BackgroundReducer = (state=defaultBackgroundState, action) => {
    switch(action.type) {
        // case ACTIONS.SET_COLOR:
        //     return {...state, color: action.color};
        case "SET_INSTRUCTOR":
            return {...state, cur_instructor: action.instructor};
        default:
            return {...state};
    }
}

export default BackgroundReducer;
