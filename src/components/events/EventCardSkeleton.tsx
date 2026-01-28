export default function EventCardSkeleton() {
  return (
    <div className="bg-dark-secondary rounded-xl overflow-hidden border border-gray-dark animate-pulse">
      {/* Status Bar Skeleton */}
      <div className="p-4 pb-3 border-b border-gray-dark/50">
        <div className="flex items-center justify-between">
          <div className="h-6 w-20 bg-dark-tertiary rounded-full"></div>
          <div className="h-4 w-24 bg-dark-tertiary rounded"></div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="p-6">
        {/* Team 1 */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-dark-tertiary rounded-lg"></div>
          <div className="flex-1">
            <div className="h-5 bg-dark-tertiary rounded w-3/4"></div>
          </div>
        </div>

        {/* VS */}
        <div className="flex items-center justify-center my-4">
          <div className="h-px bg-gray-dark flex-1"></div>
          <div className="px-4 h-4 w-8 bg-dark-tertiary rounded"></div>
          <div className="h-px bg-gray-dark flex-1"></div>
        </div>

        {/* Team 2 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-dark-tertiary rounded-lg"></div>
          <div className="flex-1">
            <div className="h-5 bg-dark-tertiary rounded w-3/4"></div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-dark-tertiary rounded w-1/2"></div>
          <div className="h-4 bg-dark-tertiary rounded w-2/3"></div>
          <div className="h-4 bg-dark-tertiary rounded w-1/3"></div>
        </div>

        {/* Button */}
        <div className="h-11 bg-dark-tertiary rounded-lg"></div>
      </div>
    </div>
  );
}