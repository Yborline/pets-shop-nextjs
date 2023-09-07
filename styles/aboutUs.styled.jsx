import Image from "next/image";
import styled from "styled-components";


export const Section1 = styled.section`
display:flex;

flex-direction:column;
align-items:center;


`

export const DivInfo = styled.div`
max-width: 500px;
margin-left: 15px;`


export const DivFlex = styled.div`
width: 100%;
display:flex;

flex-direction:column;
align-items:center;
@media screen and (min-width: 768px){
flex-direction:row;
justify-content: space-evenly;
}

`
export const DivFlexImg = styled.div`
display:flex;

`

export const P = styled.p`
margin-bottom: 20px;`

export const Container = styled.div`
padding: 0px 20px 0px 20px;
`
// display:flex;
// flex-direction:column;
// align-items:center;

export const Ul = styled.ul`
list-style-type: circle;
`

export const Li = styled.li`
`

export const H2 = styled.h2`
margin-top: 0px;
text-align:center;`

export const Img1 = styled(Image)`
width: 280px;
height:280px;
@media screen and (min-width: 768px){
width: 350px;
height:350px;
}
`

export const Img2 = styled(Img1)`

`