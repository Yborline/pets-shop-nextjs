import styled from "styled-components";

export const Div = styled.div`
margin-left: 10px;



`



export const DivNoUser = styled.div`
display:flex;
&:hover{
    color: ${({theme})=>theme.hover};
}
`

export const P = styled.p`
cursor: pointer;
`

export const Button = styled.button`
border-radius: 10px;`