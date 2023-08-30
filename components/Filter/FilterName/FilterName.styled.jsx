import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";
export const Div = styled.div`
display:flex;
justify-content:center;
align-items:${(props) => props.position} ;
width: 100%;
height: ${(props) => props.height};


`

export const Input = styled(DebounceInput)`
padding:10px;
width: 200px;
border: 1.5px solid;
height: ${(props) => props.heightInput};
border-radius: 10px;
@media screen and  (min-width: 768px){
    width: 250px;
}
@media screen and  (min-width: 1080px){
    width: 350px;
}
@media screen and (min-width: 1280px){
    width: 700px;
}
`