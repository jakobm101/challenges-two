import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name , lights, toggleLight}) {
  const [isOn, setIsOn] = useState(false);
  console.log('light',lights);
  

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
