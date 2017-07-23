Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Styles = require('./Styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: ''
};

var propTypes = {
    title: _propTypes2['default'].string,
    subtitle: _propTypes2['default'].string,
    bgColor: _propTypes2['default'].string,
    textColor: _propTypes2['default'].string,
    font: _propTypes2['default'].string,
    bgImg: _propTypes2['default'].string,
    video: _propTypes2['default'].string
};

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        bgColor = _ref.bgColor,
        textColor = _ref.textColor,
        font = _ref.font,
        bgImg = _ref.bgImg,
        video = _ref.video;

    var headerStyleCombined = Object.assign({}, _Styles.headerStyle, {
        backgroundColor: bgColor,
        backgroundImage: 'url(' + String(bgImg) + ')',
        color: textColor,
        fontFamily: font
    });

    var component = _react2['default'].createElement(
        'header',
        { style: headerStyleCombined },
        _react2['default'].createElement(
            'div',
            { style: _Styles.containerStyle },
            title && _react2['default'].createElement(
                'h1',
                { style: _Styles.titleStyle },
                title
            ),
            subtitle && _react2['default'].createElement(
                'h2',
                { style: _Styles.subtitleStyle },
                subtitle
            )
        ),
        video && _react2['default'].createElement('video', { style: _Styles.videoStyle, autoPlay: true, muted: true, loop: true, src: video })
    );

    return component;
};

FullHeader.propTypes = propTypes;
FullHeader.defaultProps = defaultProps;

exports['default'] = FullHeader;