import React from 'react';
import PropTypes from 'prop-types';

const FullHeader = ({ name }) => (
    <h1>Hello {name}!</h1>
);

FullHeader.propTypes = {
    name: PropTypes.string.isRequired,
};

export default FullHeader;
