import styled from "styled-components";

export const DivMain = styled.div`
margin-top:20px;
`

export const P = styled.p`
margin-bottom: 10px;`


export const Span = styled.span`
text-decoration:line-through;
margin: 0px 5px 0px 5px;
color: ${({theme}) => theme.discount};
`

export const Ul = styled.ul`
width:250px;
display:flex;
flex-wrap:wrap;
padding-left:0px;`


export const Li = styled.li`
margin-bottom: 15px;
  margin-right: 10px;
&:nth-last-of-type(1) {
 margin-right: 0px;
}
`

export const DivImage = styled.div`
min-height: 200px;
min-width: 280px;
position: relative;
 @media screen and (min-width: 768px) {
height: 350px;
width: 700px;
}
 @media screen and (min-width: 1280px) {
height: 400px;
width: 1000px;
}
`

export const Div = styled.div`
    @media screen and (min-width: 768px) {
display: flex;
    }


`

export const Description = styled.p`
margin-top: 15px;
max-width: 300px;
word-break: break-all;
 @media screen and (min-width: 768px) {
max-width: 700px;
}
 @media screen and (min-width: 1280px) {
max-width: 1000px;
}
`

// export const DivSpinner = styled.div`
// display: flex; 
// justify-content: center;`