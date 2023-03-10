import styled from "styled-components";

export const Btn = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  width:  ${(props) => props.width};
height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.yelowLight};
  border: 1px solid;
  cursor: pointer;
  border-radius: 5px;

  color: ${({ theme }) => theme.text};
  margin-bottom: ${(props) => props.marginB} ;
margin-top: ${(props) => props.marginT}};
`