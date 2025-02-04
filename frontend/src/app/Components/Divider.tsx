import React from 'react';

const Divider = () => {
    return (
        <div className="flex items-center my-8">
            <div className="flex-1 border-t border-gray-600"></div>
            <span className="px-4 text-gray-400">or</span>
            <div className="flex-1 border-t border-gray-600"></div>
        </div>
    );
};

export default Divider;