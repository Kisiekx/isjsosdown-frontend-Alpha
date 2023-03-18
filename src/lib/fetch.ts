import axios from 'axios'

const url = 'https://pwr-api.internal.wmsdev.pl/api/isjsosdown/'

export async function getFetch(endpoint: string, params = {}) {
    /*return axios({
        url: url + endpoint,
        method: "GET",
        params: params
    }).then((res: { data: any }) => res.data)
    */
    const response = await axios({
        url: url + endpoint,
        method: "GET",
        params: params
    })

    return response.data
}

export async function getInitialStats(){

    return await getFetch("/initial-stats")

}