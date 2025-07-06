import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
// const test505 = "https://httpstat.us/500"

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  const { data, mutate , error, isLoading} = useSWR(URL);

  useEffect(() => {
    if (error){ 
      console.error('SWR Error Object:', error);
      
      return
    } 
    if (data) setCoords({ longitude: data.longitude, latitude: data.latitude });
  }, [data, error, isLoading]);

  return (
    <main>
    {error? 'Error: API not responding': '.'}
    {isLoading? 'Loading':'.'}
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}
