import { useState } from "react";
import { useEvents } from "../hooks/useEvents";
import type { Event } from "../types";
import EventGrid from "../components/events/EventGrid";

export default function Home(){
    const {data:events,isLoading,error} = useEvents()
    const [selectedEvent,setSelectedEvent]=useState<Event|null>(null)

    const handleWatch = (event:Event)=>{
        setSelectedEvent(event)
        console.log('Watch event',event)
        alert(`Video Player: ${event.homeTeam} VS ${event.awayTeam}`)
    }

    if(error){
        return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark px-4">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-live-red mb-2">Error Loading Events</h2>
            <p className="text-gray-light text-center mb-6">
            Unable to fetch sports events. Please try again later.
            </p>
            <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-cyan text-dark rounded-lg font-semibold hover:bg-cyan/90 transition-all"
            >
            Retry
            </button>
        </div>
        )
    }  


    return(
        <div className="min-h-screen bg-dark">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        Live Sports
                    </h1>
                    <p className="text-gray-light text-lg">
                        {isLoading ? (
                        'Loading events...'
                        ) : (
                        `${events?.length || 0} events available`
                        )}
                    </p>
                </div>
                <EventGrid
                events={events || []}
                isLoading={isLoading}
                onWatch={handleWatch}/>
            </div>

        </div>
    )
}