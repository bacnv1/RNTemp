import Config from 'react-native-config';

export class API {
    url: string
    method : string
    constructor(url: string, method: "post" | "get") {
        this.url = url;
        this.method = method;
    }
}

export default {
    BASE: Config.BASE_URL,
    API: {
        GetUser: new API("https://api.github.com/users", "get")
    }
};