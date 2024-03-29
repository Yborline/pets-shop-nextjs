import styled from "styled-components";
import Sprite from "../../../public/sprite/image.svg";
import Box from "@mui/material/Box";


export const BoxNavBarMobile = styled(Box)`
display:flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
`

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

export const ButtonList = styled.div`
color:${({theme})=>theme.text};
height: 20px;

`


export const NavLi = styled.li`
list-style-type: none;
margin-left: 10px;
`
export const Ul = styled.ul`
width: 65vw;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding-top:20px;
text-align:center;


`

export const LiMobile = styled.li`
height: 30px;`


export const DivMenu = styled.div`
display: flex;
align-items: flex-end;`

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


`

export const DivTwo = styled.div`
display:flex;
justify-content: space-between;

padding: 0px 25px 0px 20px;
height: 55px;
background-color: ${({ theme }) => theme.headerlist };
align-items: center;

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

export const DivFilterMobile = styled.div`
display:flex;
height:30px;
align-items: flex-end;`

export const DivAboutUs = styled.div`
display:flex;
justify-content: space-around;`


export const DivMobileSvg = styled.div`
display: flex;
    justify-content: center;
position: absolute;
    width: 100%;
   
    top:4px;


`

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

export const DivOther = styled.div`
display:flex;
justify-content: space-between;`