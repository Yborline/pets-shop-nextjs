import styled from "styled-components";
import Link from "next/link";

export const NavLink = styled(Link)`

&:active,
:hover{
    color: ${({theme})=> theme.hover};
}
`

export const LinkActive = styled.span`


font-weight: 500;
color: ${({theme})=> theme.textActive};
&:hover{
color: ${({ theme }) => theme.hover};


}
`

export const LinkNormal = styled.span`
color: ${({ theme }) => theme.text};
&:hover{
color: ${({ theme }) => theme.hover};
}
`

export const Ul = styled.ul`
text-align: center;
display: ${({ $row }) => $row  === "row" ? "flex" : "block"};
@media screen and (min-width: 768px){
    justify-content: space-between;
width: 400px;
}
@media screen and (min-width: 1280px){
width: 700px;
}

`

export const Li = styled.li`
`
