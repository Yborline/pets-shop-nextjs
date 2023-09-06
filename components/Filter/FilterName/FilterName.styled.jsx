import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
export const Div = styled.div`
display:flex;
justify-content:center;
align-items:${(props) => props.position} ;
width: 100%;
height: ${(props) => props.height};
margin-bottom:${({marginbottom})=>marginbottom}

`

export const Input = styled(DebounceInput)`
padding:6px;
width: 230px;
border: 1.5px solid;
height: ${(props) => props.heightInput};
border-radius: 5px;
@media screen and  (min-width: 768px){
    border-radius: 20px;
    padding:10px;
    width: 330px;
}
@media screen and  (min-width: 1080px){
    width:550px;
}
@media screen and (min-width: 1280px){
    width: 700px;
}
`