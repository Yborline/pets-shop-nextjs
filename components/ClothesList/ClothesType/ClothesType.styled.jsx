
import styled from "styled-components";


export const LiNormal = styled.li`
height:25px;
padding:5px;
width: 100%;

background-color:${({theme}) => theme.Menu};
color: ${({ theme }) => theme.text};
&:hover{
    background-color:${({theme}) => theme.hoverMenu};
}
`

export const LiActive = styled(LiNormal)`
background-color:${({theme}) => theme.hoverMenu};
color: ${({ theme }) => theme.hover};
&:hover{
    background-color:${({theme}) => theme.hoverMenu};
}

`


