import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const Button = styled(BsFillArrowUpCircleFill)`

position: fixed;
 bottom: 5%;
right: 5%;
    color: ${({theme})=> theme.hover};
        
    &:hover{
    color: ${({theme})=> theme.gray};
    }
`