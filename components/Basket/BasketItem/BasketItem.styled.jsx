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
height: 150px;
min-width: 110px;`


export const DivInfo = styled.div`
display:flex; 
align-items: center;
position:relative;
margin-left: 10px;
justify-content: space-between;
width: 100%;

`

export const DivDelCounter = styled.div`

`
export const DivDelet = styled.div`
margin-right: 10px;


`
export const P = styled.p`
:not(:last-child){
  margin-bottom: 10px;
}
`
