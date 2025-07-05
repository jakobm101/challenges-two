import { useEffect, useState } from "react";
import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
  const fetcher = (url) => fetch(url).then((response) => response.json());
  const { data, mutate } = useSWR(URL, fetcher, { refreshInterval: 1000 });

  useEffect(() => {
    if (data) setCoords({ longitude: data.longitude, latitude: data.latitude });
  }, [data]);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}
