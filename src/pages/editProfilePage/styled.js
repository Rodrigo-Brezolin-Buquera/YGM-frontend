import styled from "styled-components"
import { lightNeutralColor } from "../../constants/colors"

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;
min-width: 100vw;
min-height:100vh;
background-color:${lightNeutralColor};
gap: 2em;
padding-top: 2em;
`

