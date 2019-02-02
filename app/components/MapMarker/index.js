/**
 *
 * MapMarker
 *
 */

import React from 'react';
import MarkerIco from 'images/iconfinder_FlagBlue_728937.svg';
import style from './style.scss';

function MapMarker() {
  return <img className={style.marker} src={MarkerIco} alt="marker" />;
}

MapMarker.propTypes = {};

export default MapMarker;
