import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};

// add a list of locations here 
// TODO: we need to figure out how to load from spreadsheet
const locations = [
  { lat: 42.3488, lng: -71.1551},
  { lat: 42.353046445239784, lng: -71.16014547403375}
];

const center = {
  lat: 42.3488, // default latitude
  lng: -71.1551 // default longitude
}

const CustomMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        {/* <Marker position={center} /> */}
        {locations.map((location) => (
          <Marker position={location} />
        )
           
        )}
      </GoogleMap>
    </div>
  );
};

export default CustomMap;