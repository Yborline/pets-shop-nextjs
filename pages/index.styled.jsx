import styled from "styled-components";


export const Div = styled.div`

background-color: ${({ theme }) => theme.gray};
`


export const Container = styled.div`

min-height: 100%;
display: flex;
justify-content: center;
align-items: stretch;
`

export const DivList = styled.div`
display: flex;
border-left: 1px solid;
margin-left: 20px;
`