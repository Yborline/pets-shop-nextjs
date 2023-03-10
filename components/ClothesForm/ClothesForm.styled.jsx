import styled from "@emotion/styled";


export const Form = styled.form`
padding: 20px;
 @media screen and (min-width: 1280px) {
padding: 20px 30px 20px 30px;
}


`


export const InputImg = styled.input`
`

export const DivInputTop = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 10px;
:last-child{
   margin-bottom: 0px;
}`


export const TextArea = styled.textarea`
 @media screen and (min-width: 768px) {
width:300px;
height:60px;
 }`

export const DivTop = styled.div`

display: flex;
flex-direction:column;
margin: 0px auto 10px;
width:320px;
 @media screen and (min-width: 1280px) {
   width: auto;
      margin: 0px 0px 10px 0px;
   display:grid;
   grid-template-columns: repeat(3, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
   justify-items: center;
}

`
export const Label = styled.label`
margin-right:10px;`

export const DivPrice = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
   justify-items: center;

 @media screen and (min-width: 768px) {
   display: grid;
   grid-template-columns: repeat(7, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
   justify-items: center;
}

 @media screen and (min-width: 1280px) {
   display: grid;
   grid-template-columns: repeat(13, 1fr);
   grid-column-gap: 10px;
   grid-row-gap: 1em;
   justify-items: center;
}`