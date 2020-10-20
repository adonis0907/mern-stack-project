import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {

    const title = 'a title';

    const url = 'a url';
    
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('it should show the component correctly', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('it should has a paragraph with the title', () => {

        const p = wrapper.find('p');

        expect( p.text().trim() ).toBe( title );

    });

    test('it should have the correct image', () => {

        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('it should have animate__fadeIn class', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe( true );

    })
    

});