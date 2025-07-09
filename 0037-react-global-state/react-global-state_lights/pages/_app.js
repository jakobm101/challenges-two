import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const rooms = [
  "Living Room",
  "Kitchen",
  "Bedroom",
  "Bathroom",
  "Garage",
  "Porch",
  "Garden",
  "Office",
];

const initialLights = rooms.map((room, index) => {
  return { name: room, id: index, isOn: false };
});

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const countLightsOn = lights.reduce((acc, curr) => {
    return acc + curr.isOn;
  }, 0);

  const toggleLight = (id) => {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  };

  const setAllLights = (bool) => {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: bool };
      })
    );
  };

  return (
    <Layout isDimmed={!countLightsOn}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        countLightsOn={countLightsOn}
        setAllLights={setAllLights}
      />
    </Layout>
  );
}
