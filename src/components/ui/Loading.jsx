export function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
            <div className="w-12 h-12 border-4 border-gray-200 dark:border-gray-800 border-t-gray-900 dark:border-t-white rounded-full animate-spin"></div>
            <span className="mt-4 text-sm font-medium animate-pulse">Loading...</span>
        </div>
    );
}
