import styled from "styled-components";
import gradient from "../../assets/wms-dev-original-fluid-gradient.png"
import {NavLink} from "react-router-dom";


export const TileContainer = styled.div`
  background: url(${gradient});
  background-size: cover;
  background-attachment: fixed;
  flex-grow: 1;
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  //grid-template-rows: 2rem 5rem 10rem;
  height: 33vh;
  width: auto;
  min-width: 25vh;
  border-radius: 20px;
  color: white;
  overflow: auto;
  padding: 0.5rem;
`
export const JsosTileContainer = styled(TileContainer)`
  flex-grow: 0;
  background: white;
  color: black;
  position: relative;
  min-width: max(20em, 20vw);
`

export const TopTileWrapper = styled.div`
  grid-area: 1;
  width: 100%;
  display: flex;
  height:100%;
  align-items: center;
  justify-content: space-between;
`

export const TileName = styled.p`
  white-space: nowrap;
  padding: 0;
  font-weight: 900;
  text-align: center;
  font-size: 3vh;
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
  padding: 0.5rem;
`

export const ServiceStats = styled.p`
  font-family: 'Satoshi-Variable';
  font-weight: lighter;
  padding: 0;
  font-size: 1rem;
`

export const ChartContainer = styled.div`
  position:relative;
  resize: both;
`

export const LinkWrapper = styled(NavLink)`
  flex-grow: 1;
  text-decoration: none;
`