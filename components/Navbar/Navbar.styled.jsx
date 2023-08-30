import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1)
  }
`;



export const Logo = styled.p`
text-align:center;
color: ${({ theme }) => theme.text};
margin-right:`

export const LinkActive = styled.span`


font-weight: 500;
color: ${({theme})=> theme.textActive};
:hover{
color: ${({ theme }) => theme.hover};


}
`

export const LinkNormal = styled.span`
color: ${({ theme }) => theme.text};
:hover{
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
export const DivNumber = styled.div`
width:15px;
postiton: absolute;

`

export const DivLogoInfo = styled.div`
`

export const DivAbout = styled.div`
display: flex;
justify-content: space-evenly;
background-color: ${({theme })=> theme.headerlist}`



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
:hover{
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
export const UlIcons = styled.ul`
display: flex;

// `
// export const UlNavigate = styled.div`
// display:flex;`

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
export const DivFilterMobile = styled.div`
display:flex;
height:30px;
align-items: flex-end;`


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


 @media screen and (min-width: 768px) {
padding: 0px;
    display:flex;
justify-content: space-evenly;
align-items:center;
}
background-color:${({ theme }) => theme.headerlist};
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
align-items: flex-start;
padding: 10px 10px 0px 10px;
justify-content: space-between;
background-color: ${({theme}) => theme.mobilMenu};
position: absolute;
height:100%;
width: 100vw;
right: 0px;
top: 0px;
z-index: 3;
`
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

export const DivMobileSvg = styled.div`
display: flex;
    justify-content: center;
position: absolute;
    width: 100%;
top:-23%;
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


export const DivMobile = styled.div`
display:flex;


`

export const DivAboutUs = styled.div`
display:flex;
justify-content: space-around;`


export const Divfirst = styled.div`


`


export const DivTwo = styled.div`
display:flex;
justify-content: space-between;
position:relative;


`

export const ButtonList = styled.div`
color:${({theme})=>theme.text};
height: 20px;

`


export const H1 = styled.h1`
font-family: 'Metal';
font-style: normal;
font-weight: 400;
font-size: 25px;
line-height: 8px;
        display: flex;
 @media screen and (min-width: 768px) {
font-family: 'Metal';
font-style: normal;
font-weight: 400;
font-size: 50px;
line-height: 16px;

}
&:hover{
  filter: invert(52%) sepia(31%) saturate(895%) hue-rotate(128deg) brightness(104%) contrast(98%);

}
`
