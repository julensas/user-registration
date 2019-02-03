/**
 * Testing Map MArker component
 */

import React from 'react';
import { mount } from 'enzyme';

import Marker from '../index';

const renderComponent = (props = {}) => mount(<Marker {...props} />);

describe('<Marker />', () => {
  it('should render an <img>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('img')).toHaveLength(1);
  });
});
