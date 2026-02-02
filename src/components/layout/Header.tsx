import { useState } from "react";

export default function Header(){
    const[searchQuery,setSearchQuery] = useState('')

    return(
        <header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md px-4 pt-6 pb-2 border-b border-white/5">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">sports_handball</span>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold leading-tight">SportsHub</h1>
                        <p className="text-xs text-text-muted">Good evening, Andre</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-card-dark text-text-muted hover:bg-input-bg transition-colors">
                        <span className="material-symbols-outlined text-[20px]">notifications</span>
                    </button>
                    <div className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                        <div className="w-full h-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold">
                        A
                        </div>
                     </div>
                </div>
            </div>
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                    <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input
                type="text"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                className="w-full bg-input-bg border-none rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-primary placeholder:text-text-muted text-white outline-none"
                placeholder="Find matches, teams or leagues..."/>
            </div>
        </header>
    )
}