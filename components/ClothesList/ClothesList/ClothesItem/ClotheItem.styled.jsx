import styled from "styled-components";


export const Title = styled.h3`
word-break: break-all;`

export const Li = styled.li`
color:${({theme}) => theme.textBlack};
border-radius: 4px;
max-width: 300px;
background-color:white;
margin-bottom: 10px;
:hover{
    box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
}

`

export const DivOptions = styled.div`
text-align: center;
padding:10px;
`

export const Imgg = styled.img`
object-fit: "contain";
`

export const Div = styled.div`
min-height: 230px;
min-width: 230px;
position: relative;

`

export const P = styled.p`
margin-bottom: 7px;`