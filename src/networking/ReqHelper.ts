import axios from 'axios';
import Config, {API} from './Config';

export default function (api: API, headers = null, params = null, data = null) {
    return axios({
        method: api.method,
        url: api.url,
        timeout: 20000,
        headers,
        data,
        params
    });
}
