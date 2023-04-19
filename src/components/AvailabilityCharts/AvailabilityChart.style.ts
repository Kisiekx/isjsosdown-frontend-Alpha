import { Chart } from "react-chartjs-2";
import styled from "styled-components";

export type formatedData = {
    arg: number,
    val: number
}

export const LinearChart = styled(Chart)`
    max-height: 5rem;
`