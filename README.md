# React full header
[![Build Status](https://travis-ci.org/willianjusten/react-full-header.svg?branch=master)](https://travis-ci.org/willianjusten/react-full-header)
![Badge size](https://badge-size.herokuapp.com/willianjusten/react-full-header/master/dist/Main.min.js.svg)
![Badge gzip size](https://badge-size.herokuapp.com/willianjusten/react-full-header/master/dist/Main.min.js.svg?compression=gzip)
[![NPM version](https://badge-me.herokuapp.com/api/npm/react-full-header.png)](http://badges.enytc.com/for/npm/react-full-header)

![A gif with header containing video](https://media.giphy.com/media/l0MYPKsMPCK0YNFvy/giphy.gif)

## Demo

[Live examples](https://willianjusten.github.io/react-full-header)

## Installation

```sh
$ npm install --save react-full-header
```

## Basic Usage

```jsx
import FullHeader from 'react-full-header';

...
render() {
    return (
        <FullHeader
            title="lyef"
            subtitle="What is tested may never break."
            bgColor="#EBE9EB"
            textColor="#3299BB"
            font="Lobster"
            video="videos/my_video.mp4"
        />
    );
}
...
```

## Props

- `title` (string) - main title
- `subtitle` (string) - subtitle
- `bgColor` (string) - background color
- `bgImg` (string) - image to background
- `video` (string) - video to background
- `textColor` (string) - texts color
- `font` (string) - font-family to texts

## Architecture

We've developed this component using the following boilerplate:
[lyef-react-component](https://github.com/lyef/lyef-react-component).

If you want to contribute with this component:
[Contributing Documentation](https://github.com/willianjusten/react-full-header/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/willianjusten/react-full-header/blob/master/LICENSE.md) @ [willianjusten](https://willianjusten.com.br/)
