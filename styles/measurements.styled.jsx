import Image from "next/image";
import styled from "styled-components";


export const Div = styled.div`
display:flex;
flex-direction:column;
align-items:center;
    margin-bottom: 40px;
@media screen and (min-width: 768px){
flex-direction:row;
}
`

export const P = styled.p`
max-width:1200px;
padding: 15px;
border-radius:50px;
background-color: ${({theme})=>theme.headerlist};
text-align:center;
`

export const Section = styled.section`
display:flex;
flex-direction: column;
align-items: center;`


export const Img = styled(Image)`
width: 280px;
height: 300px;
margin-bottom:20px;
@media screen and (min-width: 768px){
    margin-bottom:0px;
    width: 400px;
    height: 450px;
}

`

export const Ul = styled.ul`
margin-left: 50px;
max-width: 1000px;
    position:relative;
`

export const Li = styled.li`
&:before{
    position:absolute;
        content: " ";
      width: 12px;
  height: 12px;
left: -20px;
margin-top: 4px;
     background-size: contain;
     background-repeat: no-repeat;
      background-image: url("https://www.svgrepo.com/show/50205/dog-paw.svg");
   
}

margin-bottom: 20px;
&:last-of-type{
  margin-bottom: 0px;  
}

`