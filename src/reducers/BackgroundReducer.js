import * as ACTIONS from "../actions/BackgroundActions";
import * as COLORS from '../constants/BackgroundColors'

const defaultBackgroundState = {
    color: COLORS.WHITE
}

const BackgroundReducer = (state=defaultBackgroundState, action) => {
    switch(action.type) {
        case ACTIONS.SET_COLOR:
            return {...state, color: action.color};
    }
}

export default BackgroundReducer;