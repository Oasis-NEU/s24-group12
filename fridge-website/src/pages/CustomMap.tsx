import React, { useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '80vw',
  height: '100vh',
};

const columnStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
};

const locations = [
  //{ id: 1, lat: 42.3488, lng: -71.1551, name: 'Location 1' },
  { id: 2, lat: 42.353046445239784, lng: -71.16014547403375, name: 'Faneuil St', status: 'Unsure'}, //Faneuil St
  { id: 3, lat: 42.34887198927858, lng: -71.15516556454811, name: 'Brighton Center', status: 'Unsure'}, //Brighton Center
  { lat: 42.37807453541723, lng: -71.05679833170483, name: 'New Health', status: 'Active'}, //New Health
  { lat: 42.347672017000896, lng: -71.10597497793833, name: 'BU', status: 'Closed'},//BU
  { lat: 42.34196208228627, lng: -71.08763337666609, name: 'Northeastern', status: 'Active'},//NU
  { lat: 42.31255835028159, lng: -71.11397191636335, name: 'Jamaica Plain', status: 'Unsure'},//jamaica plain
  { lat: 42.27978855405722, lng: -71.09266213170876, name: 'Mattapan', status: 'Close'},//mattapan
  { lat: 42.28866560758116, lng: -71.12590674890467, name: 'Roslindale', status: 'Closed'},//roslindale
  { lat: 42.3417693846565, lng: -71.0809184163622, name: 'South end', status: 'Closed'}//south end
];

const center = {
  lat: 42.3299,
  lng: -71.1060
}

const CustomMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
    const collapsibles = document.getElementsByClassName('collapsible');
    for (let i = 0; i < collapsibles.length; i++) {
        if (collapsibles[i].id === location.name) {
            collapsibles[i].classList.toggle('active');
            collapsibles[i].classList.toggle('activeq');
           // collapsibles[i].classList.toggle('activeq');
            const content = collapsibles[i].nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        }
    }
};


  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
        options={{ mapId: "482aee800f23da32" }}
      >
        {locations.map((location) => (
          <MarkerF
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            // if(location.status === "Active.jpg"){
            //   icon: Active.jpg.png;
            // }
            // icon={ Active.jpg.png }
            onClick={() => handleMarkerClick(location)}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default CustomMap;
