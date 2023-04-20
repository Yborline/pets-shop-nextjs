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

export const Ul = styled.ul`
padding:20px;

    @media screen and (min-width: 768px) {
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
    }
       @media screen and (min-width: 1280px) {
   grid-template-columns: repeat(5, 1fr);
       }
`

export const DivSpinner = styled.div`
display: flex; 
justify-content: center;`