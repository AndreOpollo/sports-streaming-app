import type { Event } from "../../types";
import StatusBadge from "./StatusBadge";

interface EventCardProps{
    event:Event,
    onWatch:(event:Event)=>void
}

export default function EventCard({event,onWatch}:EventCardProps){
    const hasMultipleChannels = event.channels && event.channels.length > 1
    const totalViewers = event.channels?.reduce((sum,channel)=>{
        return sum + (parseInt(channel.viewers) ||0)
    },0)

    const formatViewers = (count:number)=>{
        if(count>=1000000) return `${(count/1000000).toFixed(1)}M`
        if(count>=1000) return `${(count/1000).toFixed(1)}K`
        return count.toString()
    }

    const isLiveOrOngoing = event.status === 'live'  || event.status === 'ongoing'

    return(
        <div className="bg-dark-secondary rounded-xl overflow-hidden border border-gray-dark hover:border-cyan hover:shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] group">
            <div className="p-4 pb-3 border-b border-gray-dark/50">
                <div className="flex items-center justify-between">
                    <StatusBadge status={event.status}/>
                    <div className="flex items-center gap-2 text-gray-light text-xs">
                        {event.countryIMG && (
                            <img
                            src={event.countryIMG}
                            alt={event.country}
                            className="w-5 h-3  object-cover rounded"
                            />
                        )}
                        <span className="uppercase tracking-wider"></span>
                    </div>
                </div>
            </div>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    {event.homeTeamIMG ? (
                        <img
                        src={event.homeTeamIMG}
                        alt={event.homeTeam}
                        className="w-12 h-12 object-contain rounded-lg bg-dark-tertiary p-1"/>
                    ):(
                        <div className="w-12 h-12 rounded-lg bg-dark-tertiary flex items-center justify-center">
                            <span className="text-gray-dark text-xl">⚽</span>
                        </div>
                    )}
                    <div className="flex-1">
                        <p className="text-white font-semibold text-lg leading-tight">{event.homeTeam}</p>
                    </div>
                </div>
                <div className="flex items-center justify-center my-4">
                    <div className="h-px bg-gray-dark flex-1"></div>
                    <span className="px-4 text-cyan font-bold text-sm">VS</span>
                    <div className="h-px bg-gray-dark flex-1"></div>
                </div>
                <div>
                {event.awayTeamIMG ? (
                    <img 
                    src={event.awayTeamIMG} 
                    alt={event.awayTeam}
                    className="w-12 h-12 object-contain rounded-lg bg-dark-tertiary p-1"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-lg bg-dark-tertiary flex items-center justify-center">
                    <span className="text-gray-dark text-xl">⚽</span>
                    </div>
                )}
                    <div className="flex-1">
                        <p className="text-white font-semibold text-lg leading-tight">
                        {event.awayTeam}
                        </p>
                    </div>
                </div>
                <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-light text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-light text-sm">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        <span className="truncate">{event.tournament}</span>
                    </div>

                {event.channels && event.channels.length > 0 && (
                    <div className="flex items-center gap-2 text-gray-light text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                    <span>
                        {event.channels.length} {event.channels.length === 1 ? 'channel' : 'channels'}
                    </span>
                    {totalViewers > 0 && (
                        <>
                        <span>•</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        <span>{formatViewers(totalViewers)}</span>
                        </>
                    )}
            </div>
          )}
        </div>

        {/* Action Button */}
        {event.channels && event.channels.length > 0 && (
          <button
            onClick={() => onWatch(event)}
            className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 ${
              isLiveOrOngoing
                ? 'bg-cyan text-dark hover:bg-cyan/90 hover:shadow-glow-cyan'
                : 'bg-dark-tertiary text-gray-light hover:bg-gray-dark border border-gray-dark'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isLiveOrOngoing ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/>
                  </svg>
                  Watch Now
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  View Details
                </>
              )}
            </span>
          </button>
        )}
        </div>
    </div>
    )
}