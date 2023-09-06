import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  max-width: 30px;
  max-height: 22px;
  background-color: inherit;
  cursor: pointer;
border: 0px;

  color: ${({ theme }) => theme.text};
  margin-right: ${(props) => props.marginRight} };
  &:active,
  :hover{
     color: ${({ theme }) => theme.moon}
  }
`;
