export interface Team{
    name:string,
    image:string | null
}

export interface Channel{
    channel_name:string,
    channel_code:string,
    viewers:string,
    url:string,
    image:string | null
}

export interface Event{
    gameID:string,
    homeTeam:string,
    awayTeam:string,
    homeTeamIMG:string | null,
    awayTeamIMG:string | null,
    time:string,
    tournament:string,
    country:string,
    countryIMG: string | null,
    status:'live' | 'ongoing' | 'scheduled' | 'upcoming' | 'finished',
    start:string,
    end:string,
    sport:string,
    channels:Channel[]

}

export interface ChannelInfo{
    channel_name:string,
    channel_code:string,
    channel_status:string,
    viewers:string,
    player:string,
    image:string | null,
    country:string
}

export interface EventsResponse {
    'cdn-live-tv':{
        [sport:string]:Event[]
    }
}

export interface ChannelsResponse{
    channels: ChannelInfo[]
}

export type SportType = 'all' | 'Soccer' | 'NFL' | 'NBA' | 'NHL'
export type StatusType = 'all' | 'live' | 'upcoming' | 'finished'

export interface FilterState{
    sport:SportType,
    status:StatusType,
    country:string,
    tournament:string,
    searchQuery:string,
    sortBy:'time' | 'viewers' | 'name',
    sortOrder: 'asc' | 'desc'
}