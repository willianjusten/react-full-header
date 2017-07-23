import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ title, subtitle }) => {
    const component = (
        <header>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );

    return component;
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

FullHeader.propTypes = propTypes;

export default FullHeader;
