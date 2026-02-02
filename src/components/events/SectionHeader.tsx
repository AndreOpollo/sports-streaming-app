interface SectionHeaderProps {
  title: string;
  showLiveFilter?: boolean;
  onFilterChange?: (filter: 'live' | 'upcoming') => void;
  activeFilter?: 'live' | 'upcoming';
}

export default function SectionHeader({ 
  title, 
  showLiveFilter = false,
  onFilterChange,
  activeFilter = 'live'
}: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        {showLiveFilter && (
          <div className="flex gap-1">
            <button
              onClick={() => onFilterChange?.('live')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                activeFilter === 'live'
                  ? 'bg-primary text-white'
                  : 'bg-card-dark text-text-muted'
              }`}
            >
              Live
            </button>
            <button
              onClick={() => onFilterChange?.('upcoming')}
              className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                activeFilter === 'upcoming'
                  ? 'bg-primary text-white'
                  : 'bg-card-dark text-text-muted'
              }`}
            >
              Upcoming
            </button>
          </div>
        )}
      </div>
      <button className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-primary/20 transition-colors">
        Sort by Time 
        <span className="material-symbols-outlined text-[14px]">expand_more</span>
      </button>
    </div>
  );
}