import styled from "styled-components";
export const DivPrice = styled.div`
 word-break: break-all; 
display:flex;
justify-content: space-evenly;

`

export const Price = styled.p`
text-decoration:line-through;
color:${({ theme }) => theme.discount};
margin-right:5px;
`


export const P = styled.p`
color:${({ theme }) => theme.actualPrice};
font-weight: 600;`


export const PNormal = styled.p`
font-weight: 600;
`