import Link from "next/link";
import styled from "styled-components";
import { pulse, heart } from "../../../styles/animation";
import FavoriteIcon from "@mui/icons-material/Favorite";
 
export const H3 = styled.h3`
width: 200px;
text-align: center;
margin: 0px; 
`

export const Div = styled.div`
display:flex;
justify-content: space-around;`

export const DivNavigation = styled.div`
display:flex;
flex-direction:column;
`
export const HoverLink = styled(Link)`
&:hover{
    color: ${({theme})=> theme.hover}

}
`

export const Button = styled.button`
border: 0px;
 background-color: inherit;
 color: inherit;
 font-size: inherit;
 padding : 0px;
 text-align: left;
 cursor: pointer;
&:hover{
    color: ${({theme})=> theme.hover}
}
`

export const Hart = styled(FavoriteIcon)`
color: ${({theme})=> theme.hart};

animation : ${props => heart(props)} 1.5s infinite;`
