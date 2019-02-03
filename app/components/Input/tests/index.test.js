/**
 * Testing Input component
 */

import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';

const renderComponent = (props = {}) =>
  mount(<Input label="input" input={{}} meta={{}} {...props} />);

describe('<Input  />', () => {
  it('should render an <input>', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('input')).toHaveLength(1);
  });

  it('should render with specified label', () => {
    const renderedComponent = renderComponent({ label: 'test' });
    expect(renderedComponent.contains('test')).toEqual(true);
  });

  it('should render with error span if error props is specified', () => {
    const renderedComponent = renderComponent({
      meta: { error: 'error', touched: true },
    });
    expect(renderedComponent.contains('error')).toEqual(true);
  });
});
