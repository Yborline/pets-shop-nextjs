import styled, { keyframes } from "styled-components";
import Image from "next/image";
import Sprite from "../../public/sprite/image.svg";
import Link from "next/link";
const rotate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1)
  }
`;




export const LinkActive = styled.span`


font-weight: 500;
color: ${({theme})=> theme.textActive};
&:hover{
color: ${({ theme }) => theme.hover};


}
`

export const LinkNormal = styled.span`
color: ${({ theme }) => theme.text};
&:hover{
color: ${({ theme }) => theme.hover};
}
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




export const DivAbout = styled.div`
display: flex;
justify-content: space-evenly;
background-color: ${({ theme }) => theme.headerlist};
color: ${({theme })=> theme.text}`



export const DivPhone = styled.div`
color: ${({theme}) => theme.text};
display: flex;
justify-content: space-around;
height:50px;
align-items: center;
padding: 0px 20px 0px 20px;
 @media screen and (min-width: 768px) {
        z-index: 3;
justify-content: space-between;
}
`

export const Phone = styled.a`
&:hover{
color: ${({ theme }) => theme.hover};
 animation: ${rotate} 1s linear infinite;

}
`

export const DivInfo = styled.div`
display:flex;
align-items: flex-end;
height: 100%;
 @media screen and (min-width: 768px) {
    z-index: 3;
justify-content: space-between;
padding: 0 20px 0px 20px;
height:40px;
}
`

export const DivUser = styled.div`
display:flex;`






export const Nav = styled.nav`
overflow: hidden;

z-index:5;
 top: 0; 
  width: 100%;
position:fixed;
display: flex;
flex-direction: column;
background-color:${({theme})=> theme.yelowLight};
color:black;


`

// padding: 20px;

export const UlNavigation = styled.ul`
padding: 10px;
background-color:${({ theme }) => theme.headerMainlist};
 @media screen and (min-width: 768px) {
padding: 0px;
    display:flex;
justify-content: space-evenly;
align-items:center;
}

 @media screen and (min-width: 768px) {
height: 30px;

}`

export const NavLi = styled.li`
list-style-type: none;
margin-left: 10px;
`
//  :nth-of-type(5){
// margin-right: 0px;
// }





export const ButtonTheme = styled.button`

display:flex;
align-items: center;`


export const DivOther = styled.div`
display: flex;
margin-right: 20px;`

export const DivSvg = styled.div`
display: flex;
    justify-content: center;
    width: 100%;
position: absolute;
top:30%;
 @media screen and (min-width: 768px) {
    top:11%;

}
`

export const Svg = styled(Sprite)`
stroke: ${({ theme }) => theme.text};
  width: 50px;
  height: 50px;
 @media screen and (min-width: 768px) {
  width: 100px;
  height: 100px;
 }
`


//  @media screen and (min-width: 768px) {
//     top:10%;
//     display:block;
// left:30%;
// }
//  @media screen and (min-width: 1150px) {
// left:40%;
// }

export const DivMenu = styled.div`
display: flex;
align-items: flex-end;`










export const H1 = styled.h1`
  display: flex;
font-family: 'Metal';
font-style: normal;
font-weight: 400;
font-size: 25pgoLinkx;
line-height: 8px;
        display: flex;
        color: ${({ theme }) => theme.text};
 @media screen and (min-width: 768px) {
font-family: 'Metal';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 16px;

}
`
export const LogoLink = styled(Link)`
z-index: 5;
  display: flex;
&:hover{
svg{
stroke:${({ theme }) => theme.hover};
}
h1{
  
color:${({ theme }) => theme.hover};
}
}`