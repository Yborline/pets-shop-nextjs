import styled from "styled-components"
import { pulse } from "../../../styles/animation"

export const UlIcons = styled.ul`
display: flex;
align-items: center;

`

export const LiIcons = styled.li`
margin-right: 10px;
:last-of-type{
    margin-right: 0px;
}

`

export const AIcons = styled.a`
color: ${({ theme }) => theme.text};
animation: ${props =>pulse(props)} 3s infinite;
border-radius: 50%;
  width: 22px;
  height: 22px;
display:block;
:hover{
    animation: none;
    color: ${({theme}) => theme.hover}
}


`