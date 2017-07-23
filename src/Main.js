import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
};

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        backgroundImage: `url(${bgImg})`,
        color: textColor,
        fontFamily: font,
    };

    const component = (
        <header style={headerStyles}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );

    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
