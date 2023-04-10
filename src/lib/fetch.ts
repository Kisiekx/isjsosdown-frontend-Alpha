import { IMessage, Stomp, StompConfig } from '@stomp/stompjs'
import axios from 'axios'
import SockJS from "sockjs-client"

const baseURL = 'https://pwr-api.internal.wmsdev.pl'
const url = baseURL+'/api/isjsosdown/'
const websocketURL = baseURL+"/faker"
export const websocketChannel = "/topic/test"


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

export async function connectToWebsocket(callback:(arg:IMessage)=>any, channel=websocketChannel){

    const socket = new SockJS(websocketURL)

    const stompClient = Stomp.over(socket)

    stompClient.connect({}, function(_frame:any){
        stompClient.subscribe(channel, callback);
    }
    )
    

}