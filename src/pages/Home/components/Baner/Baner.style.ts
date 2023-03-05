import styled from "styled-components";
import gradient from "../../../../assets/wms-dev-original-cubism-gradient.png"

export const BanerContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${gradient});
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 5vh 0 0 0;
`

export const Title = styled.h1`
  margin-top: -5vh;
  font-size: 12vh;
  color: white;
  font-weight: 900;
`

export const QuoteContainer = styled.div`
  margin: -2vh 0 2vh 0;
  font-style: italic;
  padding: 1vh 1vw;
  height: auto;
  width: 60vw;
  text-align: center;
  
`

export const Quote = styled(Title)`
  margin: auto;
  font-size: 2vw;
`

//Arrow icon in-line style object
export const arrowIconStyle = {
    color: "white",
    height: "3vh",
    width: "3vw",
}