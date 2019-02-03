/**
 * Testing Map component
 */

import React from 'react';
import { shallow } from 'enzyme';

import MapMarker from 'components/MapMarker';
import GoogleMapReact from 'google-map-react';
import Map from '../index';

const renderComponent = (props = {}) =>
  shallow(
    <Map
      onMapClick={() => {}}
      input={{
        value: {},
        onChange: () => {},
      }}
      {...props}
    />,
  );

describe('<Map  />', () => {
  it('should have marker if input value is specified', () => {
    const value = { lat: 54.909, lng: 23.917 };
    const renderedComponent = renderComponent({ input: { value } });
    expect(renderedComponent.contains(<MapMarker {...value} />)).toEqual(true);
  });

  it('should handle click events', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = renderComponent({ onMapClick: onClickSpy });
    renderedComponent
      .find(GoogleMapReact)
      .simulate('click', { lat: 54.909, lng: 23.917 });
    expect(onClickSpy).toHaveBeenCalled();
  });
});
