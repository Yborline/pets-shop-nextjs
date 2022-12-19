import styled from "styled-components";

export const Logo = styled.p`
text-align:center;
color: ${({ theme }) => theme.text};
margin-right:`

export const LinkActive = styled.span`

color: ${({theme})=> theme.yelow};

`

export const LinkNormal = styled.span`
color: ${({theme})=> theme.text};
`



export const Nav = styled.nav`
display: flex;
justify-content: space-around;
background-color:${({theme})=> theme.green};
color:white;
`

export const UlNavigation = styled.ul`
padding: 0px;
display:flex;`

export const NavLi = styled.li`
list-style-type: none;
margin-right: 10px;
 :nth-of-type(3){
margin-right: 0px;
}`


export const DivLogo = styled.div`
display:flex;
align-items: center;`

export const ButtonTheme = styled.button`

display:flex;
align-items: center;`


export const DivOther = styled.div`
display: flex;
margin-right: 20px;`