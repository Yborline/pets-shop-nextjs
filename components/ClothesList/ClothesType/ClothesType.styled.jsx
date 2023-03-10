import styled from "styled-components";

export const LinkActive = styled.span`

color: ${({theme})=> theme.yelow};

`

export const LinkNormal = styled.span`
color: ${({theme})=> theme.text};
`

export const Li = styled.li`

:not(:first-child){
    margin-left:10px;
}`

