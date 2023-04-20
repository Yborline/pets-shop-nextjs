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