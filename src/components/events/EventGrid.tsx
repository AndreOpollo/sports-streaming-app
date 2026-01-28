import type { Event } from "../../types"
import EventCard from "./EventCard"
import EventCardSkeleton from "./EventCardSkeleton"

interface EventGridProps{
    events:Event[],
    isLoading?:boolean,
    onWatch:(event:Event)=>void
}

export default function EventGrid({events,isLoading,onWatch}:EventGridProps){
    if(isLoading){
        return(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_,i)=>(
                    <EventCardSkeleton key={i}/>
                ))}
            </div>
        )
    }

    if(events.length===0){
        return(
            <div className="flex flex-col items-center justify-center py-20">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-2">No events found</h3>
                <p className="text-gray-light text-center max-w-md">There are no available matches at the moment. Check back later for upcoming events</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event)=>(
                <EventCard
                key={event.gameID}
                event={event}
                onWatch={onWatch}/>
            )) }
        </div>
    )
}