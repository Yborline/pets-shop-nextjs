import styled from "styled-components";

export const Btn = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width:  ${(props) => props.width};
height: ${(props) => props.height};
  background-color: ${({ theme,$active }) => $active === true?theme.hoverButton: theme.button};
  
  border: 0px;

box-shadow: ${({theme})=>theme.buttonShadow};
  cursor: pointer;
  border-radius: 5px;
  &:hover{
     background-color: ${({ theme }) => theme.hoverButton};
     color: ${({ theme }) => theme.hoverText};

  }
  color: ${({ theme }) => theme.text};
  margin-bottom: ${(props) => props.$marginbottom} ;
margin-top: ${(props) => props.$margintop}};
`