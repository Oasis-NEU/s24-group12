import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '100vh',
};

// add a list of locations here 
// TODO: we need to figure out how to load from spreadsheet
const locations = [
  { lat: 42.3488, lng: -71.1551},
  { lat: 42.353046445239784, lng: -71.16014547403375}, //Faneuil St
  { lat: 42.34887198927858, lng: -71.15516556454811}, //Brighton Center
  { lat: 42.37807453541723, lng: -71.05679833170483}, //New Health
  { lat: 42.347672017000896, lng: -71.10597497793833},//BU
  { lat: 42.34196208228627, lng: -71.08763337666609},//NU
  { lat: 42.31255835028159, lng: -71.11397191636335},//jamaica plain
  { lat: 42.27978855405722, lng: -71.09266213170876},//mattapan
  { lat: 42.28866560758116, lng: -71.12590674890467},//roslindale
  { lat: 42.3417693846565, lng: -71.0809184163622}//south end
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
        zoom={12}
        center={center}
      >
        <Marker position={center} />
        {locations.map((location) => (
          <Marker position={location} />
        )
           
        )}
      </GoogleMap>
    </div>
  );
};

export default CustomMap;