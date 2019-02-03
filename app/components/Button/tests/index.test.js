/**
 * Testing our Button component
 */

import React from 'react';
import { mount } from 'enzyme';

import Button from '../index';

const renderComponent = (props = {}) =>
  mount(<Button label="test" {...props} />);

describe('<Button />', () => {
  it('should render an <button>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('button')).toHaveLength(1);
  });

  it('should render a <button> with specified label', () => {
    const renderedComponent = renderComponent({ label: 'test4' });
    expect(renderedComponent.contains('test4')).toEqual(true);
  });
});
