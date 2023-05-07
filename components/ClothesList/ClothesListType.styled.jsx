import styled from 'styled-components';

export const DivType = styled.div`

`

// background-color:${({theme}) => theme.green};


export const Ul = styled.ul`
margin-left: 10px;
background-color:#B0C4DE;

border-radius :5px;
border-right: 2px solid #808080;
border-bottom: 2px solid #808080;
width: 240px;
display:flex;
flex-direction: column;
text-align: center;


`


export const Div = styled.div`

     @media screen and (min-width: 768px) {
    position: sticky;
    height: 100%;
    top: 140px;
}
`

export const DivOther = styled.div`
display:flex;
justify-content:center;`

export const Select = styled.select`
border: 1.5px solid;
border-radius: 10px;
height: 30px;
width: 200px;
margin-bottom: 15px;

`


export const Option = styled.option`
    overflow-y:scroll;`