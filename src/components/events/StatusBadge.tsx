
interface StatusBadgeProps{
    status: 'live' | 'ongoing'  | 'scheduled'  | 'upcoming'  | 'finished'
}
export default function StatusBadge({status}:StatusBadgeProps){
    const getBadgeStyles = ()=>{
        if(status === 'live'  || status === 'ongoing'){
            return 'bg-live-red text-white shadow-glow-red'
        }
        if(status==='scheduled' || status==='upcoming'){
            return 'bg-upcoming-blue text-white'
        }
        return 'bg-finished-gray text-white'
    }

    const getBadgeText = () =>{
        if(status==='live' || status === 'ongoing') return 'LIVE'
        if(status==='scheduled' || status==='upcoming') return 'UPCOMING'
        return 'FINISHED'
    }

    const isLive = status === 'live'  || status === 'ongoing'

    return(
        <div className="flex items-center gap-2">
            {isLive && (
                <span className="inline-block w-2 h-2 bg-live-red rounded-full live-pulse"></span>
            )
            }
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getBadgeStyles()} `}>
                {getBadgeText()}
            </span>

        </div>
    )

}