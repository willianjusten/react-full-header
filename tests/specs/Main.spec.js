import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal("TDD");
        });
    });

    context('subtitle', () => {
        it('should have h2 when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader subtitle="curso" />);
            expect(wrapper.find('h2').props().children).to.be.equal("curso");
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('background-color').equal('#ccc');
        });

        it('should have background-color equal #000 when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper).to.have.style('background-color').equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color equal #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper).to.have.style('color').equal('#fff');
        });

        it('should have color equal #ff0000 when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#ff0000" />);
            expect(wrapper).to.have.style('color').equal('#ff0000');
        });
    });

    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('font-family').equal('sans-serif');
        });

        it('should have font equal open-sans when none is passed', () => {
            const wrapper = shallow(<FullHeader font="open-sans" />);
            expect(wrapper).to.have.style('font-family').equal('open-sans');
        });
    });

    context('bgImg', () => {
        it('should have background-image equal empty when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper).to.have.style('background-image').equal('url()');
        });

        it('should have background-image equal bg.jpg when  passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg"/>);
            expect(wrapper).to.have.style('background-image').equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });

        it('should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });

        it('should have video tag with the video passed', () => {
            const wrapper = shallow(<FullHeader video="my_video.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal("my_video.mp4");
        });
    });

});
