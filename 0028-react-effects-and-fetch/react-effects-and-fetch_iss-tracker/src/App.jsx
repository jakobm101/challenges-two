import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const interval = setInterval(getISSCoordinates, 1000);
    return () => clearInterval(interval);
  }, []);

  async function getISSCoordinates() {
    const URL = "https://api.wheretheiss.at/v1/satellites/25544";
    const response = await fetch(URL);
    const { longitude, latitude } = await response.json();
    setCoords({ longitude: longitude, latitude: latitude });
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoordinates}
      />
    </main>
  );
}
