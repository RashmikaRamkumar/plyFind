import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size = '8', color = 'blue-500' }) => {
    return (
        <div className="flex justify-center items-center">
            <div
                className={`animate-spin rounded-full border-t-4 border-${color} border-opacity-75`}
                style={{
                    width: `${size}rem`,
                    height: `${size}rem`,
                    borderWidth: `${size / 8}rem`,
                }}
            ></div>
        </div>
    );
};

Loading.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
};

export default Loading;