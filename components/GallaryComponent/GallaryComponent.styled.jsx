import styled from "styled-components"

export const DivImage = styled.div`
background-color:${({theme})=> theme.yelowLight};
min-width: 200px;

min-height: 300px;

position:relative;
z-index: 3;

 @media screen and (min-width: 768px) {
  min-width:350px;
min-height: 350px;
max-width: 700px;
}
 @media screen and (min-width: 1280px) {
min-height: 400px;
max-width: 1000px;
}

`
export const Div = styled.div`
max-width: 280px;
 @media screen and (min-width: 1280px) {
max-width: 500px;
}`


export const DivLeft = styled.div` 
position: absolute;
top: 0 ;
bottom:0 ;
left:0;
right: 10px;
width: 50%;
display:flex; 
justify-content: flex-start;
align-items: center;
opacity: 0.6;
opacity:30 ; 
:hover{opacity: 0.33;} ;
cursor:pointer ;
z-index:1;
 @media screen and (min-width: 768px) {
position: absolute;
top: 0 ;
bottom:0 ;
left:0; 
width: 50%;
display:flex; 
justify-content: flex-start;
align-items: center;
opacity: 0.6;
opacity:30 ; 
:hover{opacity: 0.33;} ;
cursor:pointer ;
z-index:1;
}

`


export const DivRight = styled.div` 
position: absolute;
top: 0 ;
bottom:0 ;
right:0; 
width: 50%;
display:flex; 
justify-content: flex-end;
align-items: center;
opacity:30 ; 
cursor:pointer ;
z-index:1;
:hover{opacity: 0.33;} ;


`