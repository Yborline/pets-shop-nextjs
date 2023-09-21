import styled from "styled-components";





export const Container = styled.div`

min-height: 100%;
max-width:100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


 @media screen and (min-width: 768px) {

margin-top: 20px;
}

`



export const Ul = styled.ul`


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



export const H2 = styled.h2`

    text-align: center;
width: 100%;`