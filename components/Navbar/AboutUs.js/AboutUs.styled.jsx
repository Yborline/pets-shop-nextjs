import styled from "styled-components";
import Link from "next/link";

export const NavLink = styled(Link)`
&:hover{
    color: ${({theme})=> theme.hover}
}
`