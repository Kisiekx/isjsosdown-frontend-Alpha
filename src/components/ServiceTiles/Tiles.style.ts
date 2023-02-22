import styled from "styled-components";

export const TileContainer = styled.div`
  padding: 1vh;
  margin-top: 5vh;
  background-color: white;
  height: 25vh;
  min-width: 25vh;
  border-radius: 25px;
`
export const JsosTileContainer = styled(TileContainer)`
  background-color: white;
  aspect-ratio: 1.75;
`

export const TopTileWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TileName = styled.p`
  font-weight: 900;
  text-align: center;
  font-size: 3vh;
  color: black;
  
`


export const StatusDot = styled.div<{ invisible?: boolean, color?: string}>`
  background-color: ${props => props.color};
  height: 2vh;
  aspect-ratio: 1;
  border-radius: 50%;
  visibility: ${props => props.invisible ? "hidden" : "visible"};
`

export const StatsContainer = styled.div`

`

export const ServiceStats = styled.p`
  font-family: 'Satoshi-Variable';
  font-weight: lighter;
`

export const ChartContainer = styled.div`
  background-color: red;
  padding: 1vh;
  width: 100%;
  height: 8vh;
`