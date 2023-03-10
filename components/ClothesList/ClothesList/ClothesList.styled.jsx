import styled from "@emotion/styled";

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