import { styled } from "styled-components";
import Link from "next/link";

export const Section = styled.section`
margin-bottom: 50px;
width: 80%;
@media screen and (min-width: 768px){
display: flex;
justify-content: center;
}
`



export const DivText = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
@media screen and (min-width: 768px){
    margin-left: 20px;
}
@media screen and (min-width: 1280px){
    margin-left: 50px;
}
`

export const P = styled.div`
width: 100%;`

export const ButtonLink = styled(Link)`
margin-top: 20px;
display:flex;
justify-content: center;


`

export const DivImage = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;`


export const H2 = styled.h2`
text-align:center;`