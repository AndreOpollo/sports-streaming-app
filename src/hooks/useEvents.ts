import { useQuery } from "@tanstack/react-query"
import { cdnLiveTVAPI } from "../api/cdnLiveTV"
import type { Event } from "../types"

export const useEvents = () =>{
    return useQuery({
        queryKey:['events'],
        queryFn:async () =>{
            const data = await cdnLiveTVAPI.fetchEvents()

            const events: Event[] = []

            if(data['cdn-live-tv']){
                
                Object.entries(data['cdn-live-tv']).forEach(([sport,games])=>{
                    const gamesArray = Array.isArray(games)? games: Object.values(games as Record<string, any>)
                    gamesArray.forEach((game)=>{
                        events.push({
                            ...game,
                            sport
                        })
                    })
                })
            }
            return events
        },
        staleTime:60000,
        refetchInterval:60000
    })
}