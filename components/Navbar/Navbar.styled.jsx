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

export const SpanBasketNumber = styled.p`
position: relative;
color: white;
background-color: black;
border-radius: 50%;
width:100%;
height: 15px;
bottom: 22px;
left:10px;
text-align: center;
font-size:10px;

margin: 0px 0px 0px 0pxy;

`
export const DivNumber = styled.div`
width:15px;
postiton: absolute;
`








export const Nav = styled.nav`
overflow: hidden;
height: 60px;
z-index:20;
 top: 0; 
  width: 100%;
position:fixed;
display: flex;
justify-content: space-around;
background-color:${({theme})=> theme.green};
color:black;

border-bottom: 1px solid
`

export const UlNavigation = styled.ul`
padding: 0px;
display:flex;
align-items:center;`

export const NavLi = styled.li`
list-style-type: none;
margin-left: 10px;
`
//  :nth-of-type(5){
// margin-right: 0px;
// }


export const DivLogo = styled.div`
display:flex;
align-items: center;`

export const ButtonTheme = styled.button`

display:flex;
align-items: center;`


export const DivOther = styled.div`
display: flex;
margin-right: 20px;`

export const Ul = styled.ul`
display:flex;
align-items: center;
justify-content: space-around;
background-color: ${({theme}) => theme.mobilMenu};
position: absolute;
height:100%;
width: 100vw;
right: 0px;
top: 0px;
`

export const DivMenu = styled.div`
display: flex;
align-items: center;`


export const ButtonList = styled.div`
color:${({theme})=>theme.text};
height: 20px;
margin-left: 10px;`