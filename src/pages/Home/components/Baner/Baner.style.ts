import styled from "styled-components";
import gradeint from "../../../../assets/isjsosdown-gradient1.webp"

export const BanerContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${gradeint});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1vh;
`

export const Title = styled.h1`
  margin-top: 5vh;
  font-size: 12vh;
  color: white;
`