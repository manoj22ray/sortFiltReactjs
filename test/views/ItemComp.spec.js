import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

import {ItemComp} from '../../src/components/ItemComp'

describe('<ItemComp /> Component', () => {
    let renderedElement, testProps;

    beforeEach(() => {
        testProps = {
            fdItem: ['fdItem']
        };

        renderedElement = shallow(<ItemComp {...testProps}/>);
    });

    it('should have fdItem list', function () {
        expect(renderedElement.state('itemDetails')).to.equal(testProps.fdItem);
    });

    describe('form controls', function () {
        let formElement;

        beforeEach(function () {
            formElement = renderedElement.props().children[0].props.children;
        });

        describe('filter items', function () {
            let filterElement;

            beforeEach(function () {
                filterElement = formElement[0].props.children;
            });

            it('should have input textbox', function () {
                expect(filterElement.type).to.equal('input');
            });


        });

        describe('sort items', function () {
            let sortElement;

            beforeEach(function () {
                sortElement = formElement[1].props.children;
            });

            it('should have sort button', function () {
                expect(sortElement.type).to.equal('button');
            });

            it('should sort items', function () {
                const detailShot = ['fdItem'];
                sortElement.props.onClick();

                expect(renderedElement.state('itemDetails')).to.equal(detailShot);
            });
        });
    });
});
