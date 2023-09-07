import styled from "styled-components";

export const DivFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
width: 100%;
@media screen and (min-width: 768px){
   flex-direction: row;
justify-content: space-evenly;
}
margin-bottom: 20px;
@media screen and (min-width: 768px){
margin-bottom: 200px; 
   
}
`


export const Section = styled.div`
padding: 0px 20px 0px 20px;
text-align:center;
display :flex;
flex-direction:column;
align-items: center;
@media screen and (min-width: 768px){

}

`

export const H2 = styled.h2`
`
export const PPreTitle = styled.p`
margin-bottom: 15px;
@media screen and (min-width: 768px){

margin-bottom: 20px;
}
@media screen and (min-width: 768px){
    margin-bottom: 50px;

}
`


export const DivInvitation = styled.div`
background-color: ${({ theme }) => theme.headerMainlist};
border-radius: 30px;
margin-bottom: 15px;
font-weight: 600;
padding: 5px 15px 15px 25px;
display :flex;
flex-direction:column;
align-items: center;
@media screen and (min-width: 768px){

}
`


export const Ul = styled.ul`
    text-align: left;
    position:relative;

`

export const POther = styled.p`
width: 100%;
@media screen and (min-width: 768px){
   width: 400px; 
   
};
@media screen and (min-width: 1280px){
   width: 600px; 
   font-size: 20px;

}
`

export const Li = styled.li`

&:before{
    position:absolute;
        content: " ";
      width: 12px;
  height: 12px;
left: -20px;
margin-top: 4px;
     background-size: contain;
     background-repeat: no-repeat;
      background-image: url("https://www.svgrepo.com/show/50205/dog-paw.svg");
   
}

`

export const PInvite = styled.p`
margin-bottom:10px;`

export const DivContact = styled.div`
background-color: ${({ theme }) => theme.headerMainlist};
border-radius: 30px;
padding:20px;
width: 300px;
`

export const LiContacts = styled.li`
:hover{
    color: ${({theme}) => theme.hover}
}`

// https://freesvg.org/img/Paw_Print.png