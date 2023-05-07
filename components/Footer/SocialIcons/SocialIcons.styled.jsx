import styled from "styled-components"

export const UlIcons = styled.ul`
display: flex;

`

export const LiIcons = styled.li`
margin-right: 10px;
:last-of-type{
    margin-right: 0px;
}

`

export const AIcons = styled.a`
color: ${({theme}) => theme.text};
:hover{
    color: ${({theme}) => theme.hover}
}


`