import { useChannels } from "../hooks/useChannels";


export default function Channels(){
    const {data:channels,isLoading,error} = useChannels()

    if(isLoading){
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text text-gray-light text-xl">Loading channels...</div>
            </div>
        )
    }

    if(error){
        return(
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-500 text-xl">Error loading channels</div>
            </div>
        )
    }

    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-gray-light mb-8">Available Channels</h1>
            <div className="text-gray-dark">
                <p>Total events: {channels?.length|| 0}</p>
                <div className="mt-4">
                    <pre className="text-xs overflow-auto">
                        {JSON.stringify(channels?.slice(0,2),null,2)}
                    </pre>
                </div>
            </div>
        </div>
    )
}