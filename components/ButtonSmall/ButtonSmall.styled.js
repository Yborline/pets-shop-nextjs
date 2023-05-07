import styled from "styled-components";

export const Btn = styled.button`
  display: flex;
  align-items: center;
  max-width: 30px;
  max-height: 22px;
  background-color: ${({ theme }) => theme.yelowLight};
  border: 1px solid;
  cursor: pointer;
  border-radius: 10px;

  color: ${({ theme }) => theme.text};
  margin-right: ${(props) => props.marginRight} };
`;
