import {ofType} from 'redux-observable';
import {map, switchMap} from 'rxjs/operators';
import ReqHelper from '../networking/ReqHelper'
import {API} from '../networking/Config'
import {from} from "rxjs";
import {Epic} from "../const/Const";

const baseRequest = (action$: any, act: Epic, api: API) => action$.pipe(
    ofType(act.value),
    switchMap(action =>
        from(ReqHelper(api)).pipe(
            map(response => {
                try {
                    if (response.status === 200) {
                        return {
                            type: act.getSuccess(),
                            data: {
                                data: response.data
                            }
                        }
                    } else {
                        return {
                            type: act.getFail(),
                            data: {
                                message: 'Fail to get data'
                            }
                        }
                    }
                } catch (e) {
                    return {
                        type: act.getFail(),
                        data: {
                            message: e.toString()
                        }
                    }
                }
            })
        )
    )
);

export {
    baseRequest
}