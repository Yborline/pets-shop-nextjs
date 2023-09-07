
import styled from "styled-components";
import Image from "next/image";


export const ArrowButton = styled.button`
  border-radius: 50%;

  width: 130px;
`

export const DivMain = styled.div`

padding: 40px;
width: 100%;
 @media screen and (min-width: 768px) {
width: 100%;
}
 @media screen and (min-width: 1260px) {
width: 70%;
}
 
`

export const DivPrice = styled.div`

display:flex;
justify-content: center;
align-items: flex-start;
`



export const DivItem = styled.div`
display: flex;
flex-direction: column;
align-items:center;`

export const Img = styled(Image)`
                    overflow-y: hidden;
                 
                    object-fit: contain;
`

export const H3 = styled.h3`
text-align:center;`