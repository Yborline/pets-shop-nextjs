import styled from "styled-components"

export const Div = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

    @media screen and (min-width: 768px) {

    }



`
export const DivSpinner = styled.div`
display: flex; 
justify-content: center;`


export const DivColumn = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media screen and (min-width: 768px){
    margin-left: 20px;
    width: 100%;
}
`
export const DivContent = styled.div`
display:flex;
width: 100%;
justify-content: center;

`

export const DivMain = styled.div`
width: 100%;
display:flex;
flex-direction: column;
@media screen and (min-width: 768px){
flex-direction: row;
}
`
