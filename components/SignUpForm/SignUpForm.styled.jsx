import styled from "styled-components";

export const Div = styled.div`
color: ${({theme})=> theme.textBlack}
`

export const H3 = styled.h3`
margin: 0px;`
export const Ul = styled.ul`
display: flex;
flex-direction:column;
margin: 0px;
padding: 0px;
align-items: center

`

export const ButtonClose = styled.button`
height: 30px;
height: 30px;
border: 0px;
 background-color: inherit;
 color: inherit;
 font-size: inherit;
 padding : 0px;
 text-align: left;
 cursor: pointer;
 font-size: 25px;
 &:hover{
    color:${({theme})=>theme.red};
 }`

export const ButtonLog = styled.button`
margin-top: 15px;
width:100%;
height: 30px;
`

export const DivClose = styled.div`
display:flex;
justify-content: space-between`


export const Li = styled.li`
margin-bottom: 10px;
width:100%;`



export const Input = styled.input`
height: 30px;
width:100%;
border-radius:5px;`