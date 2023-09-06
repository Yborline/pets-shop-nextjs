import styled from "@emotion/styled";
        // margin-left: 200px;
export const Ul = styled.ul`


    @media screen and (min-width: 768px) {

   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-column-gap: 15px;
   grid-row-gap: 1em;
    }
           @media screen and (min-width: 1080px) {
   grid-template-columns: repeat(3, 1fr);
       }
       @media screen and (min-width: 1240px) {
   grid-template-columns: repeat(4, 1fr);
       }

       @media screen and (min-width: 1480px) {
   grid-template-columns: repeat(5, 1fr);
       }
                     @media screen and (min-width: 1750px) {
   grid-template-columns: repeat(6, 1fr);
       }
              @media screen and (min-width: 2020px) {
   grid-template-columns: repeat(7, 1fr);
       }
`


export const H3 = styled.h3`
margin-left: 50px;`
