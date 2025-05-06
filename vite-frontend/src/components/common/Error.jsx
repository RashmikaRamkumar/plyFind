import React from 'react';

const Error = ({ errorText, onRetry }) => {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorText || 'An unexpected error occurred.'}</span>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                    Retry
                </button>
            )}
        </div>
    );
};

export default Error;