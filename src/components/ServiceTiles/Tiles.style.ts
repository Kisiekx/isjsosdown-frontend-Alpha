import styled from "styled-components";

export const TileContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  padding: 1vh;
  background-color: white;
  height: 25vh;
  width: auto;
  min-width: 25vh;
  border-radius: 20px;
`
export const JsosTileContainer = styled(TileContainer)`
  flex-grow: 0;
  background-color: white;
  aspect-ratio: 1.75;
`

export const TopTileWrapper = styled.div`
  grid-area: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TileName = styled.p`
  white-space: nowrap;
  padding: 0;
  font-weight: 900;
  text-align: center;
  font-size: 3vh;
  color: black;

`

export const StatusDot = styled.div<{ invisible?: boolean, color?: string }>`
  background-color: ${props => props.color};
  height: 2vh;
  aspect-ratio: 1;
  border-radius: 50%;
  visibility: ${props => props.invisible ? "hidden" : "visible"};
`

export const StatsContainer = styled.div`
  height: auto;
  padding: 0;
`

export const ServiceStats = styled.p`
  font-family: 'Satoshi-Variable';
  font-weight: lighter;
  padding: 0;
`

export const ChartContainer = styled.div`
  background-color: red;
  padding: 1vh;
  width: 100%;
  height: 100%;
`

