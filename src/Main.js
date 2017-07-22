import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title }) => {
    const component = (
        <header>
            {title && <h1>{title}</h1>}
        </header>
    );

    return component;
};

const propTypes = {
    title: PropTypes.string,
};

FullHeader.propTypes = propTypes;

export default FullHeader;
