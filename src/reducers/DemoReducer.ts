import {EPIC} from "../const/Const";

const initialState: any = {
    data: null,
    message: null
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case EPIC.GET_USER.getSuccess():
            return Object.assign({}, state, {
                data: action.data.data
            });
        case EPIC.GET_USER.getFail():
            return Object.assign({}, state, {
                message: action.data.message
            });
        default:
            return state;
    }
}
