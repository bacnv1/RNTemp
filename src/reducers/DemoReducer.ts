import {EPIC} from "../const/Const";

const initialState: any = {
    data: null,
    message: null
}
export default function (state = initialState, action: any) {
    switch (action.type) {
        case EPIC.GET_USER.getSuccess():
            return {
                data: action.data.data
            };
        case EPIC.GET_USER.getFail():
            return {
                message: action.data.message
            };
        default:
            return state;
    }
}
