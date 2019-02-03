/**
 * Testing Nav bar component
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import { mount } from 'enzyme';
import NavBar from '../index';

const renderComponent = (props = {}) => mount(<NavBar {...props} />);

describe('<NavBar />', () => {
  it('should contain 2 NavLink', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find(NavLink)).toHaveLength(2);
  });
});
