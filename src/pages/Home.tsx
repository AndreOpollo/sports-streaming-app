import { useState, useMemo } from 'react';
import { useEvents } from '../hooks/useEvents';
import Header from '../components/layout/Header';
import SportNav from '../components/layout/SportsNav';
import SectionHeader from '../components/events/SectionHeader';
import MatchCard from '../components/events/MatchCard';
import type { Event } from '../types';

export default function Home() {
  const { data: events, isLoading, error } = useEvents();
  const [activeSport, setActiveSport] = useState('soccer');
  const [matchFilter, setMatchFilter] = useState<'live' | 'upcoming'>('live');

  // Filter events by sport and status
  const filteredEvents = useMemo(() => {
    if (!events) return [];

    let filtered = events;

    // Filter by sport
    if (activeSport !== 'live-tv' && activeSport !== 'news') {
      const sportMap: Record<string, string> = {
        'soccer': 'Soccer',
        'nba': 'NBA',
        'nfl': 'NFL',
        'nhl': 'NHL',
      };
      
      if (sportMap[activeSport]) {
        filtered = filtered.filter(e => e.sport === sportMap[activeSport]);
      }
    }

    // Filter by match status
    if (matchFilter === 'live') {
      filtered = filtered.filter(e => e.status === 'live' || e.status === 'ongoing');
    } else {
      filtered = filtered.filter(e => e.status === 'scheduled' || e.status === 'upcoming');
    }

    return filtered;
  }, [events, activeSport, matchFilter]);

  const handleSetAlert = (event: Event) => {
    console.log('Set alert for:', event);
    alert(`Alert set for ${event.homeTeam} vs ${event.awayTeam}!`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted text-lg">Loading matches...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background-dark px-4">
        <span className="material-symbols-outlined text-6xl text-live-red mb-4">error</span>
        <h2 className="text-2xl font-bold text-white mb-2">Error Loading Events</h2>
        <p className="text-text-muted text-center mb-6">
          Unable to fetch sports events. Please try again later.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      <SportNav activeSport={activeSport} onSportChange={setActiveSport} />
      
      <main className="pb-8">
        <section className="mt-4 px-4">
          <SectionHeader 
            title={activeSport === 'soccer' ? 'Soccer' : activeSport.toUpperCase()}
            showLiveFilter
            activeFilter={matchFilter}
            onFilterChange={setMatchFilter}
          />

          {filteredEvents.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-text-muted mb-4">
                sports
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">No matches found</h3>
              <p className="text-text-muted">
                Try selecting a different sport or filter
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <MatchCard 
                  key={event.gameID}
                  event={event}
                  onSetAlert={handleSetAlert}
                />
              ))}
            </div>
          )}
        </section>

        {/* Filter Discovery Section */}
        <section className="mt-8 px-4 border-t border-white/5 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-white">Filter Discovery</h2>
            <button className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-lg flex items-center gap-1 hover:bg-primary/20 transition-colors">
              Country 
              <span className="material-symbols-outlined text-[14px]">public</span>
            </button>
          </div>
          <p className="text-text-muted text-xs">
            Switch to 'Live TV' or 'News' tab to see region-specific content.
          </p>
        </section>
      </main>
    </div>
  );
}