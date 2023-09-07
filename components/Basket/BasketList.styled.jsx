import styled from "styled-components";


export const Ul = styled.ul`

display: flex;
flex-direction:column;
align-items: center;
padding-left: 0px;
`

export const TitleSumm = styled.h4`
margin-right: 5px;`

export const Div = styled.div`

  margin-top: 0px;
  padding: 20px;
      @media screen and (min-width: 768px) {
          margin-top: 30px;
  padding: 0px 60px 0px  60px;

    }
          @media screen and (min-width: 1280px) {
  padding: 0px 100px 0px  100px;

    }


`;


export const SummaryTittle = styled.div`
display: flex;
justify-content: center;
`
export const Li = styled.li`

box-shadow:  ${({theme})=> theme.basketShadow};
border-radius:5px;
background-color: ${({theme})=> theme.basketList};
&:not(:last-child){
  margin-bottom: 15px;
}
display: flex;
align-items: center;
width: 100%;
&:hover{
transform: scale(1.025);
}`








export const DivButton = styled.div`
display: flex;
justify-content:center;`

export const DivEndOrder = styled.div`
display: flex;

flex-direction: column;
align-items: center;`
