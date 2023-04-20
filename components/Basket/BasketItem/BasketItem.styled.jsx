import styled from "styled-components";


export const Ul = styled.ul`

display: flex;
flex-direction:column;
align-items: center;
padding-left: 0px;
`

export const Div = styled.div`

  margin-top: 60px;
  padding: 20px;
`;

export const Li = styled.li`

border: 1px solid;
border-radius:5px;
background-color: ${({theme})=> theme.basketList};
:not(:last-child){
  margin-bottom: 15px;
}
display: flex;
align-items: center;

width: 100%;`

export const DivImg = styled.div`

position: relative;
height: 140px;
min-width: 110px;
      @media screen and (min-width: 768px) {
height: 180px;
min-width: 150px;
    }

      @media screen and (min-width: 1280px) {
height: 200px;
min-width: 200px;
    }

`


export const DivInfo = styled.div`
padding: 10px;
display:flex; 
align-items: center;
position:relative;
justify-content: space-between;
width: 100%;

`

export const DivDelCounter = styled.div`

`
export const DivDelet = styled.div`
margin-left: 10px;
display:flex;
flex-direction:column ;
align-items: flex-end;


`
export const TitleCard = styled.h3`
 word-break: break-all; 
:not(:last-child){
  margin-bottom: 10px;
}
`

