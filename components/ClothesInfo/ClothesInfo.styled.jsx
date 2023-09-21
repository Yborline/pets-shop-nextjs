import styled from "styled-components";

export const DivMain = styled.div`
margin-top:20px;
display:flex; 
flex-direction: column;
align-items: center;
 @media screen and (min-width: 768px) {
display:block;
}

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
background-color:${({theme})=> theme.yelowLight};
max-width: 100px;
height: 300px;



 @media screen and (min-width: 768px) {
  min-width:350px;
min-height: 350px;
max-width: 700px;
}
 @media screen and (min-width: 1280px) {
min-height: 400px;
max-width: 1000px;
}

`

export const DivSizes = styled.div`
margin-bottom: 20px;
@media screen and (min-width: 768px){
  margin-bottom: 0px;
margin-left: 50px;
}
`

//  @media screen and (min-width: 768px) {
// height: 350px;
// width: 700px;
// }
//  @media screen and (min-width: 1280px) {
// height: 400px;
// width: 1000px;
// }


export const Div = styled.div`
    @media screen and (min-width: 768px) {
display: flex;

justify-content: space-around;
    }


`

export const DivCorrection = styled.div`
background-color: ${({ theme }) => theme.hoverButton};
border-radius: 5px;
border : 1px solid;
text-align:center;
width: 200px;`

export const Description = styled.pre`
hyphens: auto;
font-size: 15px;
white-space: pre-line;

margin-bottom: 15px;
max-width: 300px;

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