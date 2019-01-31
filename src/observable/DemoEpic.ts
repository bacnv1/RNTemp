import Config from '../networking/Config'
import {EPIC} from '../const/Const'
import {baseRequest} from "./common";

export const getUserEpic = (action$: any) => baseRequest(action$, EPIC.GET_USER, Config.API.GetUser);