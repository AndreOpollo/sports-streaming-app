interface SportNavProps {
  activeSport: string;
  onSportChange: (sport: string) => void;
}

export default function SportNav({ activeSport, onSportChange }: SportNavProps) {
  const sports = [
    { id: 'soccer', label: 'Soccer', icon: 'sports_soccer' },
    { id: 'live-tv', label: 'Live TV', icon: 'tv' },
    { id: 'nba', label: 'NBA', icon: 'sports_basketball' },
    { id: 'nfl', label: 'NFL', icon: 'sports_football' },
    { id: 'nhl', label: 'NHL', icon: 'sports_hockey' },
    { id: 'news', label: 'News', icon: 'newspaper' },
  ];

  return (
    <nav className="px-4 py-4 overflow-x-auto no-scrollbar flex items-center gap-3 bg-background-dark">
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onSportChange(sport.id)}
          className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-xl px-4 transition-all ${
            activeSport === sport.id
              ? 'bg-primary shadow-lg shadow-primary/20'
              : 'bg-input-bg hover:bg-card-dark'
          }`}
        >
          <span className="material-symbols-outlined text-white text-[20px]">
            {sport.icon}
          </span>
          <p className={`text-sm ${activeSport === sport.id ? 'font-semibold' : 'font-medium'} text-white`}>
            {sport.label}
          </p>
        </button>
      ))}
    </nav>
  );
}