import styled from "styled-components";

export const DivContact = styled.div`
display:flex;
flex-direction: column;

`

export const FooterDiv = styled.footer`
margin: 20px 0px 20px 0px;
border-top: 1px solid  black;
width: 100%;
`

export const UlIcons = styled.ul`
display: flex;

`




export const Div = styled.div`
display:flex;
align-items: center;
margin-bottom: 10px;
:hover{
    color: ${({theme}) => theme.hover}
}
`

export const Alink = styled.a`
margin-left: 10px;

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

export const DivInfo = styled.div`
display:flex;
justify-content: space-around;
`

