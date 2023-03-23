import styled from "styled-components";
export const DivPrice = styled.div`
display:flex;
justify-content: space-evenly;
`

export const Price = styled.p`
text-decoration:line-through;
color:${({theme})=> theme.discount}
`