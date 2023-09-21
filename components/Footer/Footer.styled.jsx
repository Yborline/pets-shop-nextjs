import styled from "styled-components";

export const DivContact = styled.div`


`

export const FooterDiv = styled.footer`

padding-bottom:20px;
border-top: 1px solid  black;
width: 100%;
`


export const LiIcons = styled.li`
margin-right: 10px;
:last-of-type{
    margin-right: 0px;
}

`

export const AIcons = styled.a`
:hover{
    color: ${({theme}) => theme.hover}
}


`



