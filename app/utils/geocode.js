export const geocode = args => {
  const geocoder = new window.google.maps.Geocoder();
  const {
    maps: {
      GeocoderStatus: { OK },
    },
  } = window.google;

  return new Promise((resolve, reject) => {
    geocoder.geocode(args, (results, status) => {
      if (status !== OK) {
        reject(status);
      }
      resolve(results);
    });
  });
};

export const getLatLng = result =>
  new Promise((resolve, reject) => {
    try {
      const latLng = {
        lat: result.geometry.location.lat(),
        lng: result.geometry.location.lng(),
      };
      resolve(latLng);
    } catch (e) {
      reject(e);
    }
  });

export const parseAddress = geoObject => {
  const components = geoObject.address_components;
  const streetNumber = components.filter(c =>
    c.types.includes('street_number'),
  )[0];
  const streetName = components.filter(c => c.types.includes('route'))[0];
  const postalCode = components.filter(c => c.types.includes('postal_code'))[0];
  let city = components.filter(c => c.types.includes('locality'))[0];
  city = city || components.filter(c => c.types.includes('postal_town'))[0];
  city =
    city ||
    components.filter(c => c.types.includes('administrative_area_level_1'))[0];
  return {
    city: city ? city.long_name : null,
    street: streetName ? `${streetName.long_name}` : '',
    streetNumber: streetNumber ? `${streetNumber.long_name}` : '',
    zip: postalCode ? `${postalCode.long_name}` : '',
  };
};
