import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ setAllLights, countLightsOn }) {
  return (
    <StyledQuickActions>
      <Button
        disabled={!countLightsOn}
        type="button"
        onClick={() => setAllLights(false)}
      >
        Turn all lights off
      </Button>
      <Button
        disabled={countLightsOn}
        type="button"
        onClick={() => setAllLights(true)}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
