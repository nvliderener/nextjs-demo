import { Skeleton } from "@/components/ui/skeleton"

function Loading() {
    return (
        <div className="container flex">
            <div className="w-64 py-4" >
                <Skeleton className="w-64 h-[20px] rounded-full my-2" />
                <div className="w-64 space-y-2 text-center">
                    <Skeleton className="w-64 h-[20px] rounded-full" />
                    <Skeleton className="w-64 h-[20px] rounded-full" />
                    <Skeleton className="w-64 h-[20px] rounded-full" />
                </div>

            </div>
            <div className="flex-1">
                <Skeleton className="w-64 h-[20px] rounded-full" />
                <div className="grid grid-cols-3 gap-4">
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                    <Skeleton className="h-[320px] p-4 rounded-lg shadow-md" />
                </div>
            </div>
        </div>
    );
}

export default Loading;