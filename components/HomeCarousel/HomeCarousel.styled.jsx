import Link from "next/link";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export const ArrowRight = styled(ArrowForwardIosIcon)`
&:hover{
    color: ${({theme})=>theme.hover};
}
`

export const ArrowLeft = styled(ArrowBackIosIcon)`
&:hover{
    color: ${({theme})=>theme.hover};
}
`

export const ArrowButton = styled.button`
  border-radius: 50%;

  width: 130px;

`

export const DivMain = styled.div`

padding: 40px;
width: 100%;

 
`

export const DivPrice = styled.div`

display:flex;
justify-content: center;
align-items: flex-start;
`

export const ImageLink = styled(Link)`
display:flex;
justify-content: center;
width: 200px;
height:200px;`

export const DivItem = styled.div`
display: flex;
flex-direction: column;
align-items:center;`