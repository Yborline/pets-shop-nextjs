import styled from "styled-components";

export const UlInfo = styled.ul`
display:flex;
flex-direction: column;
align-items: center;
@media screen and (min-width : 768px){

}
`

export const Li = styled.li`
display:flex;
align-items: center;
margin-bottom: 10px;
&:hover{
    color: ${({theme}) => theme.hover}
}
`

export const Alink = styled.a`
margin-left: 10px;

`