import type { ChannelsResponse, EventsResponse } from "../types"

const API_BASE = 'https://api.cdn-live.tv/api/v1'
const API_PARAMS = 'user=cdnlivetv&plan=free'

export const cdnLiveTVAPI = {
    fetchEvents: async():Promise<EventsResponse> =>{
        const response =  await fetch(`${API_BASE}/events/sports/?${API_PARAMS}`)

        if(!response.ok){
            throw new Error('Failed to fetch events')
        }
        const data =  await response.json()
        console.log(data)
        return data
    },

    fetchChannels:async():Promise<ChannelsResponse> =>{
        const response = await fetch(`${API_BASE}/channels/?${API_PARAMS}`)
        if(!response.ok){
            throw new Error('Failed to fetch channels')
        }
        
        const data =  await response.json()
        console.log(data)
        return data
         
    },

    fetchSportEvents:async(sport:string):Promise<EventsResponse>=>{
        const response = await fetch(`${API_BASE}/events/sports/${sport.toLowerCase()}/?${API_PARAMS}`)

        if(!response.ok){
            throw new Error(`Failed to fetch ${sport} events`)
        }
         const data =  await response.json()
        return data
    }
}