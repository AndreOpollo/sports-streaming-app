import { useEvents } from "../hooks/useEvents";

export default function Home(){
    const {data:events,isLoading,error} = useEvents()

    if(isLoading){
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text text-gray-light text-xl">Loading events...</div>
            </div>
        )
    }

    if(error){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-500 text-xl">Error loading events</div>
            </div>
        )
    }

    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-light mb-8">Sports Events</h1>
            <div className="text-gray-dark">
                <p>Total events: {events?.length|| 0}</p>
                <div className="mt-4">
                    <pre className="text-xs overflow-auto">
                        {JSON.stringify(events?.slice(0,2),null,2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}