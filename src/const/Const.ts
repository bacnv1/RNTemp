export const SCREEN_NAME = {
    Demo: 'Demo'
}


export class Epic {
    readonly value: string

    constructor(value: string) {
        this.value = value
    }

    getSuccess = () => `${this.value}_SUCCESS`
    getFail = () => `${this.value}_FAIL`
}

export const EPIC = {
    GET_USER: new Epic('GET_USER'),
}