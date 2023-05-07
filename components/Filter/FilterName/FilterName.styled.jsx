import styled from "styled-components";

export const Div = styled.div`
display:flex;
justify-content:center;
align-items:${(props) => props.position} ;
width: 100%;
height: ${(props) => props.height};
position: static;

`

export const Input = styled.input`
width: 200px;
border: 1.5px solid;
height: ${(props) => props.heightInput};
border-radius: 10px;
@media screen and  (min-width: 768px){
    width: 400px;
}
@media screen and (min-width: 1280px){
    width: 700px;
}
margin-left: 10px;`