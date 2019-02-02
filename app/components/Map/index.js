/**
 *
 * Map
 *
 */

import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import MapMarker from 'components/MapMarker';

class Map extends React.Component {
  onMapClick = ({ lat, lng }) => {
    this.props.onMapClick({ lat, lng });
    this.props.input.onChange({ lat, lng });
  };

  render() {
    const { input, className } = this.props;
    return (
      <div className={className}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAQ5U-qyYN8fl-QGMTiWCeG2OI1Z8X6hfM' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onClick={this.onMapClick}
        >
          {input.value && <MapMarker {...input.value} />}
        </GoogleMapReact>
      </div>
    );
  }
}

Map.propTypes = {
  onMapClick: PropTypes.func.isRequired,
  input: PropTypes.object.isRequired,
  center: PropTypes.object,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  center: {
    lat: 54.909,
    lng: 23.917,
  },
  zoom: 9,
};

export default Map;
