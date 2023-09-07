import styled from "styled-components"

export const Div = styled.div`
display: flex;
border: 0.5px solid;
height: 30px;
border-radius: 20px;
min-width: 90px;
max-width: 90px;
align-items: center;
justify-content:center;


`

export const Button = styled.button`
padding-left: 0px;
height: 20px;
width: 20px;
border: 0px;
color: ${({theme}) => theme.text};
background-color: ${({ theme }) => theme.basketList};
cursor: pointer;
`

export const Span = styled.span`
margin: 0px 4px 0px 4px;
background-color: ${({ theme }) => theme.basketList};
width: 30px;
text-align: center;

   

`

