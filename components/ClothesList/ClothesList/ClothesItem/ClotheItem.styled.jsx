import Image from "next/image";
import styled from "styled-components";


export const Title = styled.h3`
margin-top: 0px;
word-break: break-all;`

export const Li = styled.li`
color:${({theme}) => theme.text};
border-radius: 4px;
max-width: 300px;
background-color:${({ theme }) => theme.backgroundCart};

margin-bottom: 10px;
&:hover{
box-shadow: 2px 4px 14px 0px rgba(0,0,0,0.75);
}
    &:hover{
a{
div{

  img{

    transition: transform 0.25s;
    transform: scale(1.1);

  }}}}
`

export const DivImage = styled.div`
  width: 100%;
border-top-right-radius: 4px;
border-top-left-radius :4px;
position:relative;
  overflow: hidden;
`

export const DivOptions = styled.div`
text-align: center;
padding:10px;
`

export const Img = styled(Image)`
object-fit: contain;
border-top-right-radius: 4px;
border-top-left-radius :4px;
`

export const Div = styled.div`
min-height: 230px;
min-width: 230px;
position: relative;


`


export const P = styled.p`
margin-bottom: 7px;`