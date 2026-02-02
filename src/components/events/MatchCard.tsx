import type { Event } from '../../types';

interface MatchCardProps {
  event: Event;
  onSetAlert?: (event: Event) => void;
}

export default function MatchCard({ event, onSetAlert }: MatchCardProps) {
  const isUpcoming = event.status === 'scheduled' || event.status === 'upcoming';
  const isLive = event.status === 'live' || event.status === 'ongoing';

  // Calculate time until match (placeholder)
  const getTimeUntilMatch = () => {
    return '01:24:10'; // This would be calculated from event.start
  };

  return (
    <div className="bg-card-dark rounded-2xl p-4 border border-white/5 shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          {event.countryIMG && (
            <img 
              src={event.countryIMG} 
              alt={event.country}
              className="w-4 h-4 rounded-sm object-cover"
            />
          )}
          <span className="text-[10px] font-bold uppercase text-text-muted">
            {event.tournament} • {event.country}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isUpcoming && (
            <span className="text-[10px] font-bold uppercase text-primary">
              Starts in {getTimeUntilMatch()}
            </span>
          )}
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
            isLive 
              ? 'bg-live-red/20 text-live-red' 
              : 'bg-primary/10 text-primary'
          }`}>
            {event.time}
          </span>
        </div>
      </div>

      {/* Teams */}
      <div className="flex flex-col gap-4 mb-5">
        {/* Home Team */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
            {event.homeTeamIMG ? (
              <img 
                src={event.homeTeamIMG} 
                alt={event.homeTeam}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-2xl">🏆</span>
            )}
          </div>
          <span className="font-bold text-sm text-white">{event.homeTeam}</span>
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
            {event.awayTeamIMG ? (
              <img 
                src={event.awayTeamIMG} 
                alt={event.awayTeam}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-2xl">🏆</span>
            )}
          </div>
          <span className="font-bold text-sm text-white">{event.awayTeam}</span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[14px]">
              calendar_today
            </span>
          </div>
          <span className="text-xs font-semibold text-white/80">
            {new Date(event.start).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>
        <button 
          onClick={() => onSetAlert?.(event)}
          className="bg-input-bg hover:bg-primary/20 text-white px-4 py-1.5 rounded-lg font-bold text-[10px] uppercase transition-colors"
        >
          Set Alert
        </button>
      </div>
    </div>
  );
}