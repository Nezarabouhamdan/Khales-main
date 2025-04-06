import styled from "styled-components";
export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: space-around;
  @media screen and (max-width: 968px) {
    justify-content: center;
  align-items: center;
  height: 140vh;
  }
`;