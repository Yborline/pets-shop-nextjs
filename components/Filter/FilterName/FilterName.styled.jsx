import styled from "styled-components";

export const Div = styled.div`
display:flex;
justify-content:center;
width: 100%;
height: 50px;
position: static;

`

export const Input = styled.input`
width: 200px;
border: 1.5px solid;
height: 25px;
border-radius: 5px;
@media screen and  (min-width: 768px){
    width: 400px;
}
@media screen and (min-width: 1280px){
    width: 700px;
}
margin-left: 10px;`