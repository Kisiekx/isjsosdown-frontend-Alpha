import axios from 'axios'

const url = 'btone.crewportal-dev.com/api1/'

export function getFetch(endpoint: string, params = {}) {
    return axios({
        url: url + endpoint,
        method: "GET",
        params: params
    }).then((res: { data: any }) => res.data)
}