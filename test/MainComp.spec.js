import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import {MainComp} from '../src/MainComp';


import {ItemComp} from '../src/components/ItemComp';


describe('<MainComp /> Component', () => {
    let renderedElement;

    beforeEach(() => {
        renderedElement = shallow(<MainComp/>);
    });

    it('should have Class panel', () => {
        expect(renderedElement.props().className).to.equal('container panel panel-default heightcont');
    });


});
