import styled from 'styled-components';

export const DivType = styled.div`

`

// background-color:${({theme}) => theme.green};


export const Ul = styled.ul`
padding-left: 0px;

display:flex;
flex-direction: column;
text-align: center;
    @media screen and (min-width: 768px) {
flex-direction: row;
 flex-wrap:wrap;
 justify-content:center;

    }


`


export const Div = styled.div`
display:flex;
flex-direction: column;
align-items: center;


`