import { useQuery } from "@tanstack/react-query"
import { cdnLiveTVAPI } from "../api/cdnLiveTV"

export const useChannels = () =>{
    return useQuery({
        queryKey:['channels'],
        queryFn:async ()=>{
            const data = await cdnLiveTVAPI.fetchChannels()
            return data.channels || []
        },
        staleTime:300000
    })
}